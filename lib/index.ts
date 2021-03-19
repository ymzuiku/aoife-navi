import qs from "querystring-number";

import css from "template-css";

interface NaviElement<T> extends HTMLDivElement {
  push: (url: keyof T, state?: object, ignoreAnime?: boolean) => void;
  replace: (url: keyof T, state?: object) => void;
  pop: (num?: number) => void;
  go: (num: number) => void;
}

const pageCss = "navi-page";
function onPush(lastEle: HTMLElement, nowEle: HTMLElement, appendFn: Function) {
  lastEle.className = pageCss + " navi-move-last";
  nowEle.className = pageCss + " navi-move-next";
  appendFn();
  setTimeout(() => {
    nowEle.className = pageCss;
  }, 20);
}

function onPop(lastEle: HTMLElement, nowEle: HTMLElement) {
  lastEle.className = pageCss;
  nowEle.className = pageCss + " navi-move-next";
  nowEle.remove();
}

export function Navi<T extends { [key: string]: Function }>(
  pages: T
): NaviElement<T> {
  const out: NaviElement<T> = document.createElement("div") as any;
  out.setAttribute("ux-navi-root", "1");
  out.className = "navi-root";

  out.push = async (url: keyof T, state?: object, ignoreAnime?: boolean) => {
    const render = pages[url];
    if (!render) {
      return;
    }
    let ele = render();
    if (ele.then) {
      const fn = await Promise.resolve(ele);
      if (!fn.default) {
        return;
      }
      ele = fn.default();
    }

    const key = Navi.isWechat ? "replaceState" : "pushState";

    const pathname = state
      ? (url as string) + "?" + qs.stringify(state as any)
      : (url as string);
    history[key](state, "", pathname);

    const lastEle = out.lastElementChild as HTMLElement;
    const elePage = document.createElement("div");
    elePage.setAttribute("ux-navi", "1");

    (elePage as any).__navi_pathname = pathname;
    (elePage as any).__navi_state = state;

    elePage.append(ele);
    if (!lastEle) {
      elePage.className = pageCss;
      out.append(elePage);
    } else {
      onPush(lastEle, elePage, () => {
        out.append(elePage);
      });
    }
  };

  out.replace = async (url: keyof T, state?: object) => {
    const render = pages[url];
    if (!render) {
      return;
    }
    let ele = render();
    if (ele.then) {
      const fn = await Promise.resolve(ele);
      if (!fn.default) {
        return;
      }
      ele = fn.default();
    }

    history.replaceState(
      state,
      "",
      state
        ? (url as string) + "?" + qs.stringify(state as any)
        : (url as string)
    );

    const lastEle = out.lastElementChild as HTMLElement;
    const elePage = document.createElement("div");
    elePage.setAttribute("ux-navi", "1");
    elePage.append(ele);
    elePage.className = pageCss;
    lastEle.replaceWith(elePage);
  };

  out.pop = async (num = 1) => {
    if (num > 1) {
      for (let i = 0; i < num - 1; i++) {
        if (out.children.length - 1 > 1) {
          const _ele = out.children.item(out.children.length - 1);
          if (_ele) {
            _ele.remove();
          }
        }
      }
    }

    if (out.children.length > 1) {
      popListener();
    }
  };

  out.go = async (num = 0) => {
    out.pop(out.children.length - 1 - num);
  };

  const popListener = () => {
    if (!document.contains(out)) {
      window.removeEventListener("popstate", popListener);
      return;
    }
    if (out.children.length <= 1) {
      return;
    }
    const lastChild = out.lastChild as HTMLDivElement;

    const preEle = out.children.item(out.children.length - 2) as HTMLDivElement;

    // pop时修改url
    onPop(preEle, lastChild);
    if ((out as any).lastChild.__navi_pathname) {
      history.replaceState(
        (out as any).lastChild.__navi_state,
        "",
        (out as any).lastChild.__navi_pathname
      );
    }
  };

  // window.addEventListener("popstate", popListener);

  const pathname = location.pathname;
  out.push("/", void 0, true);
  if (pathname !== "/") {
    out.push(pathname, void 0, true);
  }
  return out;
}

css`
  :root {
    --navi-ease: cubic-bezier(0.23, 1, 0.32, 1);
  }
  .navi-root {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    position: relative;
    overflow: hidden;
    background: var(--bg, #fff);
  }
  .navi-page {
    display: block;
    position: absolute;
    background: var(--bg, #fff);
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: auto;
    top: 0px;
    left: 0px;
    transform: translateY(0%);
    transition: 0.42s transform var(--navi-ease);
  }
  .navi-move-last {
    transform: translateY(-20%);
  }
  .navi-move-next {
    transform: translateY(40%);
  }
`;

Navi.isIos = /(?:iPhone|iPad)/.test(navigator.userAgent);
Navi.isWechat = /MicroMessenger/.test(navigator.userAgent);

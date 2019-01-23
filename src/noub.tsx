/* @jsx el */
import {el, mount, RedomComponent} from 'redom';
import {matchesUA, resolveUserAgent} from 'browserslist-useragent';

declare namespace JSX {
  interface IntrinsicElements {
    [index: string]: HTMLElement;
  }
}

export interface NoubOptions {
  browsers: string[];
}

enum Color {
  Kurenai = '#cb1b45',
  Hover = '#61210f',
  ChromeDownloadLink = '#3367d6'
}

const STYLE_ID = 'NOUB_STYLE_CSS';

export class Noub implements RedomComponent {
  static insertStyle() {
    if (
      !(
        typeof document !== 'undefined' &&
        document.getElementById(STYLE_ID) === null
      )
    ) {
      return;
    }

    const style = document.createElement('style');
    style.id = STYLE_ID;

    style.innerHTML = `
.noub-Alert_Box {
  margin-bottom: 1em;
}

.noub-Alert_Message {
  background: ${Color.Kurenai};
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: .3em 1em;
  color: #e8e8e8;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.noub-Alert_IconImage {
  height: 18px;
  margin: 0 8px 0 3px;
  position: relative;
  top: 2px;
}

.noub-Alert_Strong {
  color: #fff;
}

.noub-Alert_Link {
  color: #000;
  fontWeight: bold;
  transition: .2s;
}

.noub-Alert_Link:hover {
  color: ${Color.Hover};
}

.noub-Alert_Item {
  display: block;
  text-align: center;
  width: 100%;
  background-color: #e8e8e8;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIxIDEgMTc2IDE3NiI+PGRlZnM+PGNpcmNsZSBpZD0iYSIgY3g9Ijk2IiBjeT0iOTYiIHI9Ijg4Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iYiI+PHVzZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI2EiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIj48cGF0aCBmaWxsPSIjZGI0NDM3IiBkPSJNMjIgOHYxMDhoMzlsMzUtNjBoODhWOHoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIyOSIgeDI9IjgyIiB5MT0iNzUiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0E1MjcxNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0E1MjcxNCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNMjIgOHYxMDhoMzlsMzUtNjBoODhWOHoiLz48L2c+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTYyIDExNkwyMiA0N3YxbDM5IDY4eiIgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiLz48ZyBjbGlwLXBhdGg9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03IC03KSI+PHBhdGggZmlsbD0iIzBmOWQ1OCIgZD0iTTggMTg0aDg0bDM5LTM5di0yOUg2MUw4IDI0eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjExMSIgeDI9IjUzIiB5MT0iMTY1IiB5Mj0iMTMwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDU1NTI0IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwNTU1MjQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNkKSIgZD0iTTggMTg0aDg0bDM5LTM5di0yOUg2MUw4IDI0eiIvPjwvZz48cGF0aCBmaWxsPSJub25lIiBkPSJNMTMwIDExN2gtMWwtMzggNjdoMWwzOC02N3oiIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiPjxkZWZzPjxwYXRoIGlkPSJlIiBkPSJNOCAxODRoODRsMzktMzl2LTI5SDYxTDggMjR6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iZiI+PHVzZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI2UiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNmKSI+PHBhdGggZmlsbD0iI2ZmY2Q0MCIgZD0iTTk2IDU2bDM1IDYwLTM5IDY4aDkyVjU2eiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjEyMiIgeDI9IjEzNyIgeTE9IjUwIiB5Mj0iMTE0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjRUE2MTAwIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFQTYxMDAiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNnKSIgZD0iTTk2IDU2bDM1IDYwLTM5IDY4aDkyVjU2eiIvPjwvZz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiPjxwYXRoIGZpbGw9IiNmZmNkNDAiIGQ9Ik05NiA1NmwzNSA2MC0zOSA2OGg5MlY1NnoiLz48cGF0aCBmaWxsPSJ1cmwoI2cpIiBkPSJNOTYgNTZsMzUgNjAtMzkgNjhoOTJWNTZ6Ii8+PC9nPjxnIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIj48ZGVmcz48cGF0aCBpZD0iaCIgZD0iTTk2IDU2bDM1IDYwLTM5IDY4aDkyVjU2eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9ImkiPjx1c2Ugd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgb3ZlcmZsb3c9InZpc2libGUiIHhsaW5rOmhyZWY9IiNoIi8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjaSkiPjxwYXRoIGZpbGw9IiNkYjQ0MzciIGQ9Ik0yMiA4djEwOGgzOWwzNS02MGg4OFY4eiIvPjxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik0yMiA4djEwOGgzOWwzNS02MGg4OFY4eiIvPjwvZz48L2c+PHJhZGlhbEdyYWRpZW50IGlkPSJqIiBjeD0iNjY4IiBjeT0iNTYiIHI9Ijg0IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM0UyNzIzIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzRTI3MjMiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNqKSIgZD0iTTk2IDU2djIxbDc4LTIxeiIgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiLz48ZyBjbGlwLXBhdGg9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03IC03KSI+PGRlZnM+PHBhdGggaWQ9ImsiIGQ9Ik0yMiA4djQwbDM5IDY4IDM1LTYwaDg4Vjh6Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0ibCI+PHVzZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBvdmVyZmxvdz0idmlzaWJsZSIgeGxpbms6aHJlZj0iI2siLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNsKSI+PHBhdGggZmlsbD0iIzBmOWQ1OCIgZD0iTTggMTg0aDg0bDM5LTM5di0yOUg2MUw4IDI0eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIGQ9Ik04IDE4NGg4NGwzOS0zOXYtMjlINjFMOCAyNHoiLz48L2c+PC9nPjxyYWRpYWxHcmFkaWVudCBpZD0ibSIgY3g9IjU5OCIgY3k9IjQ5IiByPSI3OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgtNTc2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzNFMjcyMyIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM0UyNzIzIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjbSkiIGQ9Ik0yMiA0OGw1NyA1OC0xOCAxMHoiIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIi8+PHJhZGlhbEdyYWRpZW50IGlkPSJuIiBjeD0iNjcyIiBjeT0iOTYiIHI9Ijg4IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzYpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjYzMjM4IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyNjMyMzgiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNuKSIgZD0iTTkyIDE4NGwyMS03OCAxOCAxMHoiIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIi8+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiPjxjaXJjbGUgY3g9Ijk2IiBjeT0iOTYiIHI9IjQwIiBmaWxsPSIjZjFmMWYxIi8+PGNpcmNsZSBjeD0iOTYiIGN5PSI5NiIgcj0iMzIiIGZpbGw9IiM0Mjg1ZjQiLz48L2c+PGcgZmlsbD0ibm9uZSIgY2xpcC1wYXRoPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNyAtNykiPjxwYXRoIGQ9Ik05NiA1NWMtMjIgMC00MCAxOC00MCA0MHYxYzAtMjIgMTgtNDAgNDAtNDBoODh2LTFIOTZ6Ii8+PHBhdGggZD0iTTEzMSAxMTZhNDAgNDAgMCAwIDEtNzAgMEw4IDI0djFsNTMgOTJhNDAgNDAgMCAwIDAgNzAgMHYtMXoiLz48cGF0aCBkPSJNMTMxIDExN2E0MCA0MCAwIDAgMCA0LTMyIDQwIDQwIDAgMCAxLTQgMzFsLTM5IDY4aDFsMzgtNjd6Ii8+PC9nPjxnIGZpbGw9Im5vbmUiIGNsaXAtcGF0aD0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIj48cGF0aCBkPSJNOTYgOWM0OCAwIDg4IDM5IDg4IDg4di0xQTg4IDg4IDAgMCAwIDggOTZ2MUM4IDQ4IDQ4IDkgOTYgOXoiLz48cGF0aCBkPSJNOTYgMTgzYzQ4IDAgODgtMzkgODgtODdBODggODggMCAwIDEgOCA5NmMwIDQ4IDQwIDg3IDg4IDg3eiIvPjwvZz48cmFkaWFsR3JhZGllbnQgaWQ9Im8iIGN4PSIzNCIgY3k9IjMyIiByPSIxNzciIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcgLTcpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PGNpcmNsZSBjeD0iODkiIGN5PSI4OSIgcj0iODgiIGZpbGw9InVybCgjbykiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: 100px 40px;
  background-size: 100px 100px;
  font-family: Segoe UI,SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-box-sizing: border-box;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 150px 0 40px;
}

.noub-Alert_Item:after {
  content: '';
  display: block;
  clear: both;
  height: 0;  
  visibility: hidden;
}

.noub-Alert_LeftItem {
  float: left;
  width: 300px;
}

.noub-Alert_RightItem {
  float: left;
  width: calc(100% - 300px - 100px);
  margin-top: -75px;
}

.noub-Alert_DownloadLink {
  display: inline-block;
  margin-top: 10px;
  color: inherit;
  background: ${Color.ChromeDownloadLink};
  border-radius: 2px;
  padding: .3em 1em;
  color: #e8e8e8;
  text-decoration: none;
}

.noub-Alert_DownloadLink:hover {
  background: #4285f4;
}
    `;

    document.head.appendChild(style);
  }

  static init(elementId: string, opts: NoubOptions): void | Noub {
    const targetElement = document.getElementById(elementId);
    if (targetElement === null) {
      throw TypeError('対象の要素が存在しません');
    }

    Noub.insertStyle();

    const browserslistOpts: any = {};
    if (Array.isArray(opts.browsers)) {
      browserslistOpts.browsers = opts.browsers;
    }

    const passed = matchesUA(navigator.userAgent, opts);

    if (passed) {
      return;
    }

    const noub = new Noub();
    mount(targetElement, noub);
    return noub;
  }

  el: HTMLElement;
  // chromeLink: HTMLElement;

  getBrowserName() {
    const browserVersion = resolveUserAgent(navigator.userAgent);
    return `${browserVersion.family}(${browserVersion.version})`;
  }

  constructor() {
    // el is not defined
    el;
    this.el = (
      <div role="alert" class="noub-Alert_Box">
        <div role="alert" class="noub-Alert_Message">
          <p>
            お使いのブラウザ
            <strong class="noub-Alert_Strong">
              「{this.getBrowserName()}」
            </strong>
            はサポート対象外です。
            <br />
            以下のモダンブラウザの最新バージョンをご利用してください。
          </p>
        </div>

        <div class="noub-Alert_List">
          <a class="noub-Alert_Item">
            <div class="noub-Alert_LeftItem">Google Chrome</div>
            <div class="noub-Alert_RightItem">
              <span style="display:inline-block">最新のウェブ環境</span>
              に対応した
              <span style="display:inline-block">高速で安全な無料</span>の
              <span style="display:inline-block">ウェブブラウザ</span>
              <div>
                <a
                  href="https://www.google.com/intl/ja_ALL/chrome/"
                  class="noub-Alert_DownloadLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  リンク先からダウンロード
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

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
  Usubeni = '#e87a90',
  Kurenai = '#cb1b45'
}

export class Noub implements RedomComponent {
  static init(elementId: string, opts: NoubOptions) {
    const targetElement = document.getElementById(elementId);
    if (targetElement === null) {
      throw TypeError('対象の要素が存在しません');
    }

    const noub = new Noub();

    const browserslistOpts: any = {};
    if (Array.isArray(opts.browsers)) {
      browserslistOpts.browsers = opts.browsers;
    }

    const passed = matchesUA(navigator.userAgent, opts);

    if (!passed) {
      mount(targetElement, noub);
    }

    return noub;
  }

  el: HTMLElement;

  getBrowserName() {
    const browserVersion = resolveUserAgent(navigator.userAgent);
    return `${browserVersion.family}(${browserVersion.version})`;
  }

  constructor() {
    // el is not defined
    el;
    this.el = (
      <div
        role="alert"
        style={{
          background: Color.Usubeni,
          border: `1px solid ${Color.Kurenai}`,
          borderRadius: '3px',
          boxSizing: 'border-box',
          padding: '0 1em',
          color: '#292929'
        }}
      >
        <p>
          お使いのブラウザ
          <strong style={{color: '#000'}}>「{this.getBrowserName()}」</strong>
          はサポート対象外です。
          <br />
          <a
            href="https://www.google.com/intl/ja_ALL/chrome/"
            style={{
              color: '#000',
              fontWeight: 'bold'
            }}
          >
            Google Chrome
          </a>
          などのモダンブラウザを利用してください。
        </p>
      </div>
    );
  }
}

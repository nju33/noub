/* @jsx el */
import {el, mount, RedomComponent} from 'redom';

declare namespace JSX {
  interface IntrinsicElements {
    [index: string]: HTMLElement;
  }
}

export interface NoubOptions {
  browsers: string[];
}

export class Noub implements RedomComponent {
  static create(elementId: string, opts: NoubOptions) {
    const targetElement = document.getElementById(elementId);
    if (targetElement === null) {
      throw TypeError('対象の要素が存在しません');
    }

    const noub = new Noub();

    mount(targetElement, noub);

    return noub;
  }

  el: HTMLElement;

  constructor() {
    // el is not defined
    el;
    this.el = <div>hoge</div>;
  }
}

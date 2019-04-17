import { DebugElement, } from '@angular/core';

export abstract class ElementHelper<T, U extends HTMLElement> {
  public component: T;
  public debugEl: DebugElement;
  public element: U;

  public constructor(component: T, debugEl: DebugElement, element: U) {
    this.component = component;
    this.debugEl = debugEl;
    this.element = element;
  }
}

export class ElementInputHelper<T> extends ElementHelper<T, HTMLInputElement> {
  public setInputValue(value: string) {
    this.element.value = value;
    this.debugEl.triggerEventHandler('input', {
      target: this.element
    });
  }
}

export class ElementTextAreaHelper<T>
  extends ElementHelper<T, HTMLTextAreaElement> { }

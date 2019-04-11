import { DebugElement, } from '@angular/core';

export class ElementHelper<T, U extends HTMLElement> {
  public component: T;
  public debugEl: DebugElement;
  public element: U;

  public constructor(component: T, debugEl: DebugElement, element: U) {
    this.component = component;
    this.debugEl = debugEl;
    this.element = element;
  }
}

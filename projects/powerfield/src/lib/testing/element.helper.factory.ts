import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ElementHelper, ElementInputHelper } from './element.helper';

/**
 * Abstract factory class to create an ElementHelper.
 */
abstract class ElementHelperFactory<T, U extends HTMLElement> {
  protected readonly fixture: ComponentFixture<T>;

  constructor(component: Type<T>) {
    this.fixture = TestBed.createComponent(component);
    this.fixture.detectChanges();
  }

  /**
   * Creates a new instance of an ElementHelper.
   * @param debugEl the debug element
   * @param element the element
   */
  protected abstract construct(debugEl: DebugElement, element: U): ElementHelper<T, U>;

  /**
   * Creates an ElementHelper instance based on the component.
   * @param selector the css selector to get the element.
   */
  public create(selector: string): ElementHelper<T, U> {
    const debugEl: DebugElement = this.fixture.debugElement.query(By.css(selector));
    const element: U = debugEl.nativeElement;

    return this.construct(debugEl, element);
  }
}

/**
 * Factory class to create an ElementHelper with an HTMLInputElement.
 */
export class ElementInputHelperFactory<T>
  extends ElementHelperFactory<T, HTMLInputElement> {
  /**
   * Creates a new instance of an ElementInputHelper.
   * @param debugEl the debug element
   * @param element the element
   */
  protected construct(debugEl: DebugElement, element: HTMLInputElement): ElementInputHelper<T> {
    return new ElementInputHelper(this.fixture.componentInstance, debugEl, element);
  }

  /**
   * Creates an ElementHelper instance based on the component.
   * @param selector the css selector to get the element.
   */
  public create(selector: string): ElementInputHelper<T> {
    return super.create(selector) as ElementInputHelper<T>;
  }
}

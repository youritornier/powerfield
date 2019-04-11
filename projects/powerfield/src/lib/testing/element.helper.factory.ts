import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ElementHelper } from './element.helper';

/**
 * Abstract factory class to create an ElementHelper.
 */
abstract class ElementHelperFactory<T, U extends HTMLElement> {
  private readonly fixture: ComponentFixture<T>;

  constructor(component: Type<T>) {
    this.fixture = TestBed.createComponent(component);
    this.fixture.detectChanges();
  }

  /**
   * Creates an ElementHelper instance based on the component.
   * @param selector the css selector to get the element.
   */
  public create(selector: string): ElementHelper<T, U> {
    const debugEl: DebugElement = this.fixture.debugElement.query(By.css(selector));
    const element: U = debugEl.nativeElement;

    return new ElementHelper(this.fixture.componentInstance, debugEl, element);
  }
}

/**
 * Factory class to create an ElementHelper with an HTMLInputElement.
 */
export class ElementInputHelperFactory<T>
  extends ElementHelperFactory<T, HTMLInputElement> { }

import { Component, } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ElementInputHelperFactory, ElementHelper } from '../testing';
import { AutowidthDirective } from './autowidth.directive';

@Component({
  template:
    '<input id="autoWidth" type="text" value="first" powAutowidth>' +
    '<input id="autoWidthExtra" type="text" value="first" powAutowidth [powExtraWidth]="50">' +
    '<input id="autoWidthMax" type="text" powAutowidth [powMaxWidth]="50">' +
    '<input id="autoWidthMin" type="text" powAutowidth [powMinWidth]="100">' +
    '<input id="autoWidthPlaceholder" placeholder="This is a placeholder" powAutowidth>'
})
class MockComponent { constructor() { } }

describe('AutowidthDirective', () => {
  let elHelper: ElementHelper<MockComponent, HTMLInputElement>;
  let elExtraHelper: ElementHelper<MockComponent, HTMLInputElement>;
  let elMaxHelper: ElementHelper<MockComponent, HTMLInputElement>;
  let elMinHelper: ElementHelper<MockComponent, HTMLInputElement>;
  let elPlaceholderHelper: ElementHelper<MockComponent, HTMLInputElement>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutowidthDirective,
        MockComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const elHelperFactory = new ElementInputHelperFactory(MockComponent);
    elHelper = elHelperFactory.create('input#autoWidth');
    elExtraHelper = elHelperFactory.create('input#autoWidthExtra');
    elMaxHelper = elHelperFactory.create('input#autoWidthMax');
    elMinHelper = elHelperFactory.create('input#autoWidthMin');
    elPlaceholderHelper = elHelperFactory.create('input#autoWidthPlaceholder');
  });

  it('should create component', () => {
    expect(elHelper.component).toBeDefined();
    expect(elExtraHelper.component).toBeDefined();
    expect(elMaxHelper.component).toBeDefined();
    expect(elMinHelper.component).toBeDefined();
    expect(elPlaceholderHelper.component).toBeDefined();
  });

  it('should expand component', () => {
    const initialWidth: number = elHelper.element.getBoundingClientRect().width;
    elHelper.element.value = 'Adding some text';
    elHelper.debugEl.triggerEventHandler('input', {
      target: elHelper.element
    });
    const resultWidth: number = elHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeGreaterThan(initialWidth);
  });

  it('should shrink component', () => {
    elHelper.element.value = 'Adding some text';
    elHelper.debugEl.triggerEventHandler('input', {
      target: elHelper.element
    });
    const initialWidth: number = elHelper.element.getBoundingClientRect().width;
    elHelper.element.value = '';
    elHelper.debugEl.triggerEventHandler('input', {
      target: elHelper.element
    });
    const resultWidth: number = elHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeLessThan(initialWidth);
  });

  // TODO: test placeholder
  // TODO: test min-width
  // TODO: test max-width
  // TODO: test extra space
  // TODO: test ngModel
  // TODO: test not an input
});

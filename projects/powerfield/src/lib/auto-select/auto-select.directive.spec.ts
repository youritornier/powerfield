import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ElementInputHelper, ElementInputHelperFactory } from '../testing';
import { AutoSelectDirective } from './auto-select.directive';

@Component({
  template:
    '<input id="autoSelect" type="text" value="This is a text" powAutoSelect>'
})
class MockComponent {
  constructor() { }
}

describe('AutoSelectDirective', () => {
  let elHelper: ElementInputHelper<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutoSelectDirective,
        MockComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const elHelperFactory = new ElementInputHelperFactory(MockComponent);
    elHelper = elHelperFactory.create('input#autoSelect');
  });

  it('should create component', () => {
    expect(elHelper.component).toBeDefined();
  });

  it('should select all text', () => {
    elHelper.debugEl.triggerEventHandler('click', {
      target: elHelper.element
    });
    const selectedText = elHelper.element.value.substring(
      elHelper.element.selectionStart,
      elHelper.element.selectionEnd
    );

    expect(selectedText).toEqual(elHelper.element.value);
  });
});

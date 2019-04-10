import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AutowidthDirective } from './autowidth.directive';

@Component({
  template: '<input type="text" powAutowidth>'
})
class MockComponent {
  constructor() { }
}

describe('AutowidthDirective', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutowidthDirective,
        MockComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should expand component', () => {
    const debugEl: DebugElement = fixture.debugElement.query(By.css('input'));
    const input: HTMLInputElement = debugEl.nativeElement;

    const initialWidth: number = input.getBoundingClientRect().width;
    input.value = 'Adding some text';
    debugEl.triggerEventHandler('input', {
      target: input
    });
    const resultWidth: number = input.getBoundingClientRect().width;

    expect(resultWidth).toBeGreaterThan(initialWidth);
  });

  it('should shrink component', () => {
    const debugEl: DebugElement = fixture.debugElement.query(By.css('input'));
    const input: HTMLInputElement = debugEl.nativeElement;

    input.value = 'Adding some text';
    debugEl.triggerEventHandler('input', {
      target: input
    });
    const initialWidth: number = input.getBoundingClientRect().width;
    input.value = '';
    debugEl.triggerEventHandler('input', {
      target: input
    });
    const resultWidth: number = input.getBoundingClientRect().width;

    expect(resultWidth).toBeLessThan(initialWidth);
  });

  // TODO: test placeholder
  // TODO: test min-width
  // TODO: test max-width
  // TODO: test extra space
  // TODO: test ngModel
  // TODO: test not an input
});

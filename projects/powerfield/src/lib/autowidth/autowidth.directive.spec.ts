import { Component, OnInit, } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ElementInputHelper, ElementInputHelperFactory } from '../testing';
import { AutowidthDirective } from './autowidth.directive';

const powExtraWidth = 50;
const powMaxWidth = 50;
const powMinWidth = 100;

@Component({
  template:
    `<input id="autoWidth" type="text" value="text" powAutowidth>
    <input id="autoWidthExtra" type="text" value="text" powAutowidth [powExtraWidth]="${powExtraWidth}">
    <!-- #autoWidthMax is box-sizing: border-box; to verify max-width with padding and borders -->
    <input id="autoWidthMax" type="text" value="text" style="box-sizing: border-box;" powAutowidth [powMaxWidth]="${powMaxWidth}">
    <!-- #autoWidthMin is box-sizing: border-box; to verify min-width with padding and borders -->
    <input id="autoWidthMin" type="text" value="text" style="box-sizing: border-box;" powAutowidth [powMinWidth]="${powMinWidth}">
    <input id="autoWidthPlaceholder" placeholder="This is a placeholder" powAutowidth>
    <input id="autoWidthNgModel" type="text" [(ngModel)]="text" powAutowidth>`
})
class MockComponent implements OnInit {
  public text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = 'Adding some text';
  }
}

describe('AutowidthDirective', () => {
  let elHelper: ElementInputHelper<MockComponent>;
  let elExtraHelper: ElementInputHelper<MockComponent>;
  let elMaxHelper: ElementInputHelper<MockComponent>;
  let elMinHelper: ElementInputHelper<MockComponent>;
  let elNgModelHelper: ElementInputHelper<MockComponent>;
  let elPlaceholderHelper: ElementInputHelper<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
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
    elNgModelHelper = elHelperFactory.create('input#autoWidthNgModel');
    elPlaceholderHelper = elHelperFactory.create('input#autoWidthPlaceholder');
  });

  it('should create component', () => {
    expect(elHelper.component).toBeDefined();
    expect(elExtraHelper.component).toBeDefined();
    expect(elMaxHelper.component).toBeDefined();
    expect(elMinHelper.component).toBeDefined();
    expect(elNgModelHelper.component).toBeDefined();
    expect(elPlaceholderHelper.component).toBeDefined();
  });

  it('should expand component', () => {
    const initialWidth: number = elHelper.element.getBoundingClientRect().width;
    elHelper.setInputValue('Adding some text');
    const resultWidth: number = elHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeGreaterThan(initialWidth);
  });

  it('should shrink component', () => {
    const initialWidth: number = elHelper.element.getBoundingClientRect().width;
    elHelper.setInputValue('');
    const resultWidth: number = elHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeLessThan(initialWidth);
  });

  it('should be initialized with extra width', () => {
    const width: number = elHelper.element.getBoundingClientRect().width;
    const extraWidth: number = elExtraHelper.element.getBoundingClientRect().width;

    expect(extraWidth).toEqual(width + powExtraWidth);
  });

  it('should expand with extra width', () => {
    elHelper.setInputValue('Adding some text');
    const width: number = elHelper.element.getBoundingClientRect().width;

    elExtraHelper.setInputValue('Adding some text');
    const extraWidth: number = elExtraHelper.element.getBoundingClientRect().width;

    expect(extraWidth).toEqual(width + powExtraWidth);
  });

  it('should shrink with extra width', () => {
    elHelper.setInputValue('');
    const width: number = elHelper.element.getBoundingClientRect().width;

    elExtraHelper.setInputValue('');
    const extraWidth: number = elExtraHelper.element.getBoundingClientRect().width;

    expect(extraWidth).toEqual(width + powExtraWidth);
  });

  it('should expand without exceeding the max width', () => {
    elMaxHelper.setInputValue('Adding some very long text');
    const width: number = elMaxHelper.element.getBoundingClientRect().width;

    // elMaxHelper has to be box-sizing: border-box;
    // if not the powMaxWidth = width - border - padding
    expect(width).toEqual(powMaxWidth);
  });

  it('should be initialized with the min width', () => {
    const width: number = elMinHelper.element.getBoundingClientRect().width;

    // elMinHelper has to be box-sizing: border-box;
    // if not the powMinWidth = width - border - padding
    expect(width).toEqual(powMinWidth);
  });

  it('should be initialized depending the placeholder width', () => {
    const initialWidth: number = elPlaceholderHelper.element.getBoundingClientRect().width;
    elPlaceholderHelper.setInputValue('Text');
    const resultWidth: number = elPlaceholderHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeLessThan(initialWidth);
  });

  it('should be initialized depending the ngModel width', () => {
    const initialWidth: number = elHelper.element.getBoundingClientRect().width;
    const resultWidth: number = elNgModelHelper.element.getBoundingClientRect().width;

    expect(resultWidth).toBeLessThan(initialWidth);
  });
});

import {
  AfterContentChecked,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[powAutowidth]'
})
export class AutowidthDirective implements AfterContentChecked, OnDestroy, OnInit {
  // Width (in px) to add to the input's width content
  @Input() powExtraWidth = 0;
  // Maximal input's width
  @Input() powMaxWidth = 0;
  // Minimal input's width
  @Input() powMinWidth = 0;

  private input: HTMLInputElement;
  private twin: HTMLSpanElement;

  constructor(el: ElementRef, public renderer: Renderer2) {
    this.input = el.nativeElement as HTMLInputElement;
    // TODO: manage error if not an input
  }

  ngAfterContentChecked(): void {
    this.buildTwin();
    this.adjustWidth();
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.twin);
  }

  ngOnInit(): void {
    this.setMaxWidth();
    this.setMinWidth();
  }

  @HostListener('input', ['$event.target']) oninput() {
    this.adjustWidth();
  }

  /**
   * Build a twin component of the input width the same style.
   */
  private buildTwin(): void {
    const style = window.getComputedStyle(this.input);
    this.twin = document.createElement('span');

    // default twin style
    this.renderer.setStyle(this.twin, 'position', 'absolute');
    this.renderer.setStyle(this.twin, 'top', '-999px');
    this.renderer.setStyle(this.twin, 'left', '-999px');
    this.renderer.setStyle(this.twin, 'opacity', '0');
    this.renderer.setStyle(this.twin, 'width', 'auto');
    this.renderer.setStyle(this.twin, 'white-space', 'pre');

    // twin style based on this.input
    this.renderer.setStyle(this.twin, 'border', style.border);
    this.renderer.setStyle(this.twin, 'padding', style.padding);
    this.renderer.setStyle(this.twin, 'font-family', style.fontFamily);
    this.renderer.setStyle(this.twin, 'font-feature-settings', style.fontFeatureSettings);
    this.renderer.setStyle(this.twin, 'font-size', style.fontSize);
    this.renderer.setStyle(this.twin, 'font-size-adjust', style.fontSizeAdjust);
    this.renderer.setStyle(this.twin, 'font-stretch', style.fontStretch);
    this.renderer.setStyle(this.twin, 'font-style', style.fontStyle);
    this.renderer.setStyle(this.twin, 'font-variant', style.fontVariant);
    this.renderer.setStyle(this.twin, 'font-weight', style.fontWeight);
    this.renderer.setStyle(this.twin, 'letter-spacing', style.letterSpacing);
    this.renderer.setStyle(this.twin, 'text-transform', style.textTransform);

    document.body.appendChild(this.twin);
  }

  /**
   * Adjusts the width of the input.
   */
  private adjustWidth(): void {
    this.clearTwinChildren();
    const value = this.getValue();
    this.twin.append(document.createTextNode(value));

    let newWidth = this.twin.getBoundingClientRect().width;
    if (this.powExtraWidth > 0) {
      newWidth += this.powExtraWidth;
    }
    this.setWidth(newWidth);
  }

  /**
   * Removes all children of twin element.
   */
  private clearTwinChildren() {
    while (this.twin.firstChild) {
      this.twin.removeChild(this.twin.firstChild);
    }
  }

  /**
   * Gets the value of the input. If it is empty, gets the value of the input's placeholder.
   * @returns the value of the input or of the input's placeholder.
   */
  public getValue(): string {
    let value = this.input.value;
    if (!value) {
      value = this.input.placeholder || '';
    }

    return value;
  }

  /**
   * Sets the max-width of the input based on powMaxWidth.
   */
  private setMaxWidth(): void {
    if (this.powMaxWidth > 0) {
      this.renderer.setStyle(this.input, 'max-width', `${this.powMaxWidth}px`);
    }
  }

  /**
   * Sets the min-width of the input based on powMinWidth.
   */
  private setMinWidth(): void {
    if (this.powMinWidth > 0) {
      this.renderer.setStyle(this.input, 'min-width', `${this.powMinWidth}px`);
    }
  }

  /**
   * Sets the width of the input if it changed.
   * @param width the width to set.
   */
  private setWidth(width: number): void {
    if (width !== this.input.getBoundingClientRect().width) {
      this.renderer.setStyle(this.input, 'width', `${width}px`);
    }
  }
}

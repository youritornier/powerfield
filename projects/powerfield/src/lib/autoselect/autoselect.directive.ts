import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[powAutoselect]'
})
export class AutoselectDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event.target']) onclick() {
    this.selectAll();
  }

  private selectAll() {
    this.el.nativeElement.select();
  }
}

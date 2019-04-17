import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDocumentation]'
})
export class DocumentationDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

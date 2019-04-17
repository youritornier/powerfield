import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocumentationDirective } from '../../directives/documentation/documentation.directive';
import { AutoselectExampleComponent } from '../../pages/input/autoselect/autoselect-example.component';
import { AutowidthExampleComponent } from '../../pages/input/autowidth/autowidth-example.component';

@Component({
  selector: 'app-documentation-example',
  templateUrl: './documentation-example.component.html',
  styleUrls: ['./documentation-example.component.scss']
})
export class DocumentationExampleComponent implements OnInit {
  @ViewChild(DocumentationDirective) docExample: DocumentationDirective;

  private componentMap = {
    autowidth: AutowidthExampleComponent,
    autoselect: AutoselectExampleComponent
  };

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    // On route parameter change load the corresponding component.
    this.route.params.subscribe(() => this.loadComponent());
  }

  private loadComponent(): void {
    const directiveName = this.route.snapshot.params.name;
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.componentMap[directiveName]);

    const viewContainerRef: ViewContainerRef = this.docExample.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}

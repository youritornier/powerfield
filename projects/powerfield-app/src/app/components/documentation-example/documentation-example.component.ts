import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocumentationDirective } from '../../directives/documentation/documentation.directive';
import { AutowidthExampleComponent } from '../../pages/input/autowidth/autowidth-example.component';

@Component({
  selector: 'app-documentation-example',
  templateUrl: './documentation-example.component.html',
  styleUrls: ['./documentation-example.component.scss']
})
export class DocumentationExampleComponent implements OnInit {
  @ViewChild(DocumentationDirective) docExample: DocumentationDirective;

  private componentMap = {
    autowidth: AutowidthExampleComponent
  };

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    const directiveName = this.route.snapshot.params.name;
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.componentMap[directiveName]);

    const viewContainerRef: ViewContainerRef = this.docExample.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}
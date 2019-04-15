import { Component, OnInit } from '@angular/core';

import { ExampleModel, DocumentationModel } from '../../../models';
import { DocumentationService } from '../../../services/documentation/documentation.service';

@Component({
  selector: 'app-autowidth',
  templateUrl: './autowidth.component.html',
  styleUrls: ['./autowidth.component.scss']
})
export class AutowidthComponent implements OnInit {
  public examples: Array<ExampleModel>;
  public documentation: DocumentationModel;

  constructor(private documentationService: DocumentationService) { }

  ngOnInit() {
    this.documentationService.getByDirectiveName('Autowidth')
      .subscribe(d => this.documentation = d);

    this.examples = new Array();
    this.examples.push({
      title: 'Basic Autowidth',
      code: '<input type="text" powAutowidth placeholder="Your content" />'
    });
    this.examples.push({
      title: 'Extra Autowidth',
      code: '<input type="text" powAutowidth [powExtraWidth]="20" placeholder="Your content" />'
    });
    this.examples.push({
      title: 'Min & max Autowidth',
      code: '<input type="text" powAutowidth [powMaxWidth]="100" [powMinWidth]="30" />'
    });
  }
}

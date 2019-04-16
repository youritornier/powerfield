import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DocumentationModel } from '../../models';
import { DocumentationService } from '../../services/documentation/documentation.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public documentation: DocumentationModel;

  constructor(
    private route: ActivatedRoute,
    private documentationService: DocumentationService
  ) { }

  ngOnInit() {
    const directiveName: string = this.route.snapshot.params.name;
    this.documentationService.getByDirectiveName(directiveName)
      .subscribe(d => this.documentation = d);
  }
}

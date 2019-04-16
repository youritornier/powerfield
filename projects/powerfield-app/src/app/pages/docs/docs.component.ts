import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiModel } from '../../models';
import { DocumentationService } from '../../services/documentation/documentation.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public apiDocumentation: ApiModel;

  constructor(
    private route: ActivatedRoute,
    private documentationService: DocumentationService
  ) { }

  ngOnInit() {
    const directiveName: string = this.route.snapshot.params.name;
    this.documentationService.getByDirectiveName(directiveName)
      .subscribe(d => this.apiDocumentation = d);
  }
}

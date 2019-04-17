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
  public selectedTabIndex: number;

  constructor(
    private route: ActivatedRoute,
    private documentationService: DocumentationService
  ) {
    this.apiDocumentation = new ApiModel();
  }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.loadApi();
      // Reset the selectedTabIndex to the first tab.
      this.selectedTabIndex = 0;
    });
  }

  private loadApi(): void {
    const directiveName: string = this.route.snapshot.params.name;
    this.documentationService.getByDirectiveName(directiveName)
      .subscribe(d => this.apiDocumentation = d);
  }
}

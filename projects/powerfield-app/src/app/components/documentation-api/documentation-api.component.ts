import { Component, OnInit, Input } from '@angular/core';

import { ApiModel } from '../../models';

@Component({
  selector: 'app-documentation-api',
  templateUrl: './documentation-api.component.html',
  styleUrls: ['./documentation-api.component.scss']
})
export class DocumentationApiComponent implements OnInit {
  @Input() apiDocumentation: ApiModel;

  constructor() { }

  ngOnInit() {}
}

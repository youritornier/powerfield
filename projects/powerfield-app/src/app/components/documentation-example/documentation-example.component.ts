import { Component, OnInit, Input } from '@angular/core';

import { ExampleModel } from '../../models';

@Component({
  selector: 'app-documentation-example',
  templateUrl: './documentation-example.component.html',
  styleUrls: ['./documentation-example.component.scss']
})
export class DocumentationExampleComponent implements OnInit {
  @Input() example: ExampleModel;
  public showSource: boolean;

  constructor() { }

  ngOnInit() { }

  public toggleShowSource() {
    this.showSource = !this.showSource;
  }
}

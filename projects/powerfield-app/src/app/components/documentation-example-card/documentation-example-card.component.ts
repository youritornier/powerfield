import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-example-card',
  templateUrl: './documentation-example-card.component.html',
  styleUrls: ['./documentation-example-card.component.scss']
})
export class DocumentationExampleCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() source: string;

  public showSource: boolean;

  constructor() { }

  ngOnInit() { }

  public toggleShowSource() {
    this.showSource = !this.showSource;
  }
}

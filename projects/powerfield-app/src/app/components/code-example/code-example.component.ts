import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit {
  @Input() exampleTitle: string;
  public showSource: boolean;

  constructor() {
    this.showSource = false;
  }

  ngOnInit() { }

  public toggleShowSource() {
    this.showSource = !this.showSource;
  }
}

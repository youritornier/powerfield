import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private mediaQueryListener: () => void;

  public mediaQuery: MediaQueryList;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery = media.matchMedia('(max-width: 990px)');
  }

  ngOnInit() {
    this.mediaQuery.addListener(this.mediaQueryListener);
  }
}

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { DocMenuModel } from '../models';
import { RoutingService } from '../services/routing/routing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private mediaQueryListener: () => void;

  public docMenu: Array<DocMenuModel>;
  public mediaQuery: MediaQueryList;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private routingService: RoutingService
  ) {
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery = media.matchMedia('(max-width: 990px)');
    this.docMenu = new Array();
  }

  ngOnInit() {
    this.mediaQuery.addEventListener('resize', this.mediaQueryListener);
    this.initializeDocMenu();
  }

  private initializeDocMenu() {
    this.routingService.getAll()
      .subscribe(d => this.docMenu = d);
  }
}

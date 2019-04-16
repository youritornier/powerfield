import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DocumentationService } from './documentation/documentation.service';
import { RoutingService } from './routing/routing.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    DocumentationService,
    RoutingService
  ]
})
export class ServicesModule {}

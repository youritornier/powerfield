import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DocumentationService } from './documentation/documentation.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [],
  providers: [
    DocumentationService
  ]
})
export class ServicesModule {}

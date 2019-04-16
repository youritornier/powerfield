import { NgModule } from '@angular/core';

import { DocumentationDirective } from './documentation/documentation.directive';

@NgModule({
  declarations: [
    DocumentationDirective
  ],
  imports: [],
  exports: [
    DocumentationDirective
  ],
  providers: []
})
export class DirectivesModule {}

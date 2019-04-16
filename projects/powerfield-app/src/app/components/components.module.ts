import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerfieldModule } from 'powerfield';

import { DirectivesModule } from '../directives/directives.module';
import { MaterialModule } from '../material/material.module';
import { DocExampleComponent } from './doc-example/doc-example.component';
import { DocumentationApiComponent } from './documentation-api/documentation-api.component';
import { DocumentationExampleCardComponent } from './documentation-example-card/documentation-example-card.component';

@NgModule({
  declarations: [
    DocExampleComponent,
    DocumentationApiComponent,
    DocumentationExampleCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PowerfieldModule,
    DirectivesModule
  ],
  exports: [
    DocExampleComponent,
    DocumentationApiComponent,
    DocumentationExampleCardComponent
  ],
  providers: []
})
export class ComponentsModule {}

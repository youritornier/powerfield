import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerfieldModule } from 'powerfield';

import { DirectivesModule } from '../directives/directives.module';
import { MaterialModule } from '../material/material.module';
import { DocumentationApiComponent } from './documentation-api/documentation-api.component';
import { DocumentationExampleComponent } from './documentation-example/documentation-example.component';
import { DocumentationExampleCardComponent } from './documentation-example-card/documentation-example-card.component';

@NgModule({
  declarations: [
    DocumentationExampleComponent,
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
    DocumentationExampleComponent,
    DocumentationApiComponent,
    DocumentationExampleCardComponent
  ],
  providers: []
})
export class ComponentsModule {}

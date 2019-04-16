import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerfieldModule } from 'powerfield';

import { DirectivesModule } from '../directives/directives.module';
import { MaterialModule } from '../material/material.module';
import { DocExampleComponent } from './doc-example/doc-example.component';
import { DocumentationApiComponent } from './documentation-api/documentation-api.component';
import { DocumentationExampleCardComponent } from './documentation-example-card/documentation-example-card.component';
import { DocumentationExampleComponent } from './documentation-example/documentation-example.component';
import { DocumentationTabComponent } from './documentation-tab/documentation-tab.component';

@NgModule({
  declarations: [
    DocExampleComponent,
    DocumentationApiComponent,
    DocumentationExampleCardComponent,
    DocumentationExampleComponent,
    DocumentationTabComponent
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
    DocumentationExampleCardComponent,
    DocumentationExampleComponent,
    DocumentationTabComponent
  ],
  providers: []
})
export class ComponentsModule {}

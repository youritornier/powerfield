import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerfieldModule } from 'powerfield';

import { MaterialModule } from '../material/material.module';
import { DocumentationApiComponent } from './documentation-api/documentation-api.component';
import { DocumentationExampleComponent } from './documentation-example/documentation-example.component';
import { DocumentationTabComponent } from './documentation-tab/documentation-tab.component';

@NgModule({
  declarations: [
    DocumentationApiComponent,
    DocumentationExampleComponent,
    DocumentationTabComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PowerfieldModule
  ],
  exports: [
    DocumentationApiComponent,
    DocumentationExampleComponent,
    DocumentationTabComponent
  ],
  providers: []
})
export class ComponentsModule {}

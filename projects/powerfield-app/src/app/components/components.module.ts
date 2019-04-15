import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CodeExampleComponent } from './code-example/code-example.component';

@NgModule({
  declarations: [
    CodeExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CodeExampleComponent
  ],
  providers: []
})
export class ComponentsModule {}

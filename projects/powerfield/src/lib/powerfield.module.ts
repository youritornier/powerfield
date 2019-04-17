import { NgModule } from '@angular/core';

import { AutoSelectDirective } from './auto-select/auto-select.directive';
import { AutoWidthDirective } from './auto-width/auto-width.directive';

@NgModule({
  declarations: [
    AutoSelectDirective,
    AutoWidthDirective
  ],
  imports: [],
  exports: [
    AutoSelectDirective,
    AutoWidthDirective
  ]
})
export class PowerfieldModule { }

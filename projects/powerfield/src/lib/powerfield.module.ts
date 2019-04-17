import { NgModule } from '@angular/core';

import { AutoselectDirective } from './auto-select/auto-select.directive';
import { AutowidthDirective } from './auto-width/auto-width.directive';

@NgModule({
  declarations: [
    AutoselectDirective,
    AutowidthDirective
  ],
  imports: [],
  exports: [
    AutoselectDirective,
    AutowidthDirective
  ]
})
export class PowerfieldModule { }

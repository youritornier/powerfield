import { NgModule } from '@angular/core';

import { AutoselectDirective } from './autoselect/autoselect.directive';
import { AutowidthDirective } from './autowidth/autowidth.directive';

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

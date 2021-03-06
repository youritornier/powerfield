import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PowerfieldModule } from 'powerfield';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { ServicesModule } from '../services/services.module';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';
import { AutoSelectExampleComponent } from './input/auto-select/auto-select-example.component';
import { AutoWidthExampleComponent } from './input/auto-width/auto-width-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

@NgModule({
  declarations: [
    AutoSelectExampleComponent,
    AutoWidthExampleComponent,
    DocsComponent,
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ComponentsModule,
    PowerfieldModule,
    ServicesModule
  ],
  exports: [
    DocsComponent,
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  providers: [],
  entryComponents: [
    AutoSelectExampleComponent,
    AutoWidthExampleComponent
  ]
})
export class PagesModule {}

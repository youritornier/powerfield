import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PowerfieldModule } from 'powerfield';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { AutowidthComponent } from './input/autowidth/autowidth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

@NgModule({
  declarations: [
    AutowidthComponent,
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ComponentsModule,
    PowerfieldModule
  ],
  exports: [
    AutowidthComponent,
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  providers: []
})
export class PagesModule {}

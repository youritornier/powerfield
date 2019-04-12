import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuickstartComponent } from './quickstart/quickstart.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    QuickstartComponent
  ],
  providers: []
})
export class PagesModule {}

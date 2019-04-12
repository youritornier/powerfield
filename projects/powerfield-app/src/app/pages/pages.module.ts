import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { QuickstartComponent } from './quickstart/quickstart.component';


@NgModule({
  declarations: [
    HomeComponent,
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
    QuickstartComponent
  ],
  providers: []
})
export class PagesModule {}

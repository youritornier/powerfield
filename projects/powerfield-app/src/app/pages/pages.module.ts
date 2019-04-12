import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class PagesModule {}

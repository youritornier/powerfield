import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsHandler } from './errors-handler';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    PagesModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: ErrorsHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

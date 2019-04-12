import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AutowidthComponent } from './pages/input/autowidth/autowidth.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuickstartComponent } from './pages/quickstart/quickstart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'input/autowidth', component: AutowidthComponent },
  { path: 'quickstart', component: QuickstartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

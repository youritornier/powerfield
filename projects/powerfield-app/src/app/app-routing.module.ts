import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { QuickstartComponent } from './pages/quickstart/quickstart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs/:type/:name', component: DocsComponent },
  { path: 'quickstart', component: QuickstartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

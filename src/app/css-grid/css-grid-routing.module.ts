import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { CssGridComponent } from './css-grid.component';

const routes: Routes = Route.withShell([
  { path: 'grid', component: CssGridComponent, data: { title: extract('Css Grid') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CssGridRoutingModule { }

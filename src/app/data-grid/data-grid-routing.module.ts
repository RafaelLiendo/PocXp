import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { DataGridComponent } from './data-grid.component';

const routes: Routes = Route.withShell([
  { path: 'data-grid', component: DataGridComponent, data: { title: extract('Data Grid') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DataGridRoutingModule { }

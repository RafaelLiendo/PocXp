import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { SampleFormComponent } from './sample-form.component';

const routes: Routes = Route.withShell([
  { path: 'sample', component: SampleFormComponent, data: { title: extract('Sample Form') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SampleFormRoutingModule { }

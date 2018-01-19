import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxDataGridModule } from 'devextreme-angular';

import { MaterialModule } from '../material.module';
import { DataGridRoutingModule } from './data-grid-routing.module';
import { DataGridComponent } from './data-grid.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    DataGridRoutingModule,
    DxDataGridModule
  ],
  declarations: [
    DataGridComponent
  ]
})
export class DataGridModule { }

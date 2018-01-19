import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import { MaterialModule } from '../material.module';
import { DataGridRoutingModule } from './data-grid-routing.module';
import { DataGridComponent } from './data-grid.component';
import { Service } from './data-grid.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    DataGridRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  declarations: [
    DataGridComponent
  ],
  providers: [
    Service
  ]
})
export class DataGridModule { }

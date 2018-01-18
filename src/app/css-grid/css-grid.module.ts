import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CssGridRoutingModule } from './css-grid-routing.module';
import { CssGridComponent } from './css-grid.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    CssGridRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CssGridComponent
  ]
})
export class CssGridModule { }

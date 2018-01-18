import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { SampleFormRoutingModule } from './sample-form-routing.module';
import { SampleFormComponent } from './sample-form.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    SampleFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SampleFormComponent
  ]
})
export class SampleFormModule { }

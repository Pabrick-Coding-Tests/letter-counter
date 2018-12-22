import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CounterFormComponent } from './counter-form.component';

@NgModule({
  declarations: [ CounterFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ CounterFormComponent ]
})
export class CounterFormModule { }

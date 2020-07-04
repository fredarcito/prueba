import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './form-routing.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { FormServiceService } from './services/form-service.service'



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    FormRoutingModule
  ],
  providers: [FormServiceService]
})
export class FormModule { }

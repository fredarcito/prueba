import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormServiceService } from '../../services/form-service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {


  checkoutForm;
  showErrors = false;

  constructor(private formBuilder: FormBuilder, private formServiceService: FormServiceService) { }

  ngOnInit() {
    this.getForm();
  }

  getForm(){
    this.checkoutForm = this.formBuilder.group({
      name:  ['', Validators.required],
      address:  ['', Validators.required],
      phone:  ['', Validators.required],
      description:  ['', Validators.required],
      email: ['', Validators.email]
      
    });
  }

  submit(value){
    this.showErrors = true;
    console.log(value)
  }

}

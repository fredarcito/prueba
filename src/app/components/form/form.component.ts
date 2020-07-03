import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {


  checkoutForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getForm();
  }

  getForm(){
    this.checkoutForm = this.formBuilder.group({
      name:  ['', Validators.required],
      address: ''
    });
  }

}

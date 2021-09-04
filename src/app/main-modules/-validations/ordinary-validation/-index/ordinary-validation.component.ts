import { Component, OnInit } from '@angular/core';
import {CustomPattern, NbValidators, ValidationSrcType} from '@angular-boot/validation';
import {FormGroup, Validators} from '@angular/forms';
import {Toolkit2} from '@angular-boot/util';

@Component({
  selector: 'app-ordinary-validation',
  templateUrl: './ordinary-validation.component.html',
  styleUrls: ['./ordinary-validation.component.scss']
})
export class OrdinaryValidationComponent implements OnInit {
  reqTitle: string;
  formSubmitted = false;
  // MyCustomPattern = CustomPattern;
  // MyCmnToolkit2 = Toolkit2;
  // MyValidationSrcType = ValidationSrcType;
  // public form: FormGroup;
  // public num = 5;
  // public arrayLengthTest = ['ok'];
  // public dateTest = { year: 2017, month: 10, day: 12 };
  // public objProperty = { id: 1 };

  constructor() { }

  getPlacement() {
    return 'auto top';
  }

  ngOnInit() {
    // this.formGroup.controls['firstName'].setValidators(NbValidators.email);
  }

  onSubmit(form) {
    console.log(form);
  }



}

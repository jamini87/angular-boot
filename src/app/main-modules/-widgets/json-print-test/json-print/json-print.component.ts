import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-json-print',
  templateUrl: './json-print.component.html',
  styleUrls: ['./json-print.component.scss']
})
export class JsonPrintComponent implements OnInit {
  testPerson: TestPerson;
  constructor() {
    this.testPerson = new TestPerson();
  }

  ngOnInit() {
  }

  doSubmit(form: NgForm) {
    console.log(form.value);
  }
}
export class TestPerson {
  id: string;
  firstName: string;
  lastName: string;
}

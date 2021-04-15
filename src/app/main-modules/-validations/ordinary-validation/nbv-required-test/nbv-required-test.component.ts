import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbv-required-test',
  templateUrl: './nbv-required-test.component.html',
  styleUrls: ['./nbv-required-test.component.scss']
})
export class NbvRequiredTestComponent implements OnInit {
  reqTitle: string;
  formSubmitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSaveInfo(baseInfoForm: any) {
    this.formSubmitted = true;
  }
}

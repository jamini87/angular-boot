import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormCanDeactivate} from "../../../../../../projects/angular-boot/common/src/lib/nb-common/routing";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends FormCanDeactivate implements OnInit {

  name: string;

  @ViewChild('form')
  form: NgForm;


  submit() {
    console.log(this.form.submitted);
  }

  ngOnInit(): void {
  }

}

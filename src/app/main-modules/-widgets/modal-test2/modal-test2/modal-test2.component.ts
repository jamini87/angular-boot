import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modal-test2',
  templateUrl: './modal-test2.component.html',
  styleUrls: ['./modal-test2.component.scss']
})
export class ModalTest2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doAfterClose() {
    window.history.back();
  }
}

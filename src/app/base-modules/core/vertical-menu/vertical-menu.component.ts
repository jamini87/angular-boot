import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss', 'vertical-menu.component.rtl.scss']
})
export class VerticalMenuComponent implements OnInit {

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  // buildForm() {
  //   FormState.reset();
  //   this.router.navigate(['/panel/form']);
  // }
}

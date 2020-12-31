import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalUtil} from '../../../../../../projects/angular-boot/widgets/src/lib/nb-widgets/modal/modal-util';

@Component({
  selector: 'app-modal-test2-index',
  templateUrl: './modal-test2-index.component.html',
  styleUrls: ['./modal-test2-index.component.scss']
})
export class ModalTest2IndexComponent implements OnInit {
  modalId: string;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.modalId = ModalUtil.generateModalId();
  }

  ngOnInit() {
  }

  prepareShow() {
    this.router.navigate(['modal'], {relativeTo: this.activatedRoute});
  }

  prepareShow2() {
    this.router.navigate(['test3'], {relativeTo: this.activatedRoute});
  }

  prepareShowHear() {
    ModalUtil.showModal(this.modalId);
  }
}

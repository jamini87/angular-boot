import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalUtil} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets/modal/modal-util';
import {ModalComponent} from '../../../../../projects/angular-boot/widgets/src/lib/nb-widgets/modal/modal.component';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent implements OnInit {
  @ViewChild('testModal', {static: true}) testModal: ModalComponent;
  modalId: string;
  modalId2: string;

  constructor() {
    this.modalId = ModalUtil.generateModalId();
    this.modalId2 = ModalUtil.generateModalId();
  }

  ngOnInit() {
  }

  showModal() {
    // this.testModal.showModal();
    // alert(this.modalId);
    ModalUtil.showModal(this.modalId);
  }
  showModal2() {
    // this.testModal.showModal();
    // alert(this.modalId);
    ModalUtil.showModal(this.modalId2);
  }
}

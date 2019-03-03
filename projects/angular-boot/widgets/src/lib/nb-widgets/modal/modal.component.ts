import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {ModalUtil} from './modal-util';
import {isNullOrUndefined} from 'util';
import {ModalSize} from '@angular-boot/helper';

declare var $: any;

@Component({
  selector: 'nbw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() hasHeader: boolean = true;
  @Input() hasFooter: boolean = true;
  @Input() myId: string = null;
  @Input() autoShow: boolean = true;
  @Input() modalSize: ModalSize = ModalSize.DEFAULT;
  @Input() customWidthPercent: number = 50;
  @Input() historyBackOnClose: boolean = false;
  @Input() dataBackdrop: boolean = true;
  @Input() removeFromDomOnHide: boolean;
  @Input() appendToBodyOnShow: boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  myModalSizeClass: string = '';
  hasCustomWidth: boolean = false;

  constructor() {
    if (isNullOrUndefined(this.myId)) {
      this.myId = ModalUtil.generateModalId();
    }
  }

  ngOnInit() {
    // alert(this.myId);

    //
    // $('.modal').modal({
    //
    // });
  }

  ngAfterViewInit(): void {
    const that = this;
    if (this.autoShow === true) {
      ModalUtil.showModal(this.myId);
    }
    $('#' + this.myId.toString()).on('hidden.bs.modal', () => {
      // do something…
      that.onClose.emit(true);
      // alert(that.myId);
      if (this.historyBackOnClose == true) {
        window.history.back();
      }
    });
  }

  // getExtraClass() {
  //   alert(this.modalSize);
  //   switch (this.modalSize) {
  //     case ModalSize.FULL_SCREEN :
  //       return 'modal-full-screen';
  //     case ModalSize.LARGE :
  //       return 'modal-lg';
  //     case ModalSize.SMALL :
  //       return 'modal-sm';
  //   }
  // }

  public showModal() {
    ModalUtil.showModal(this.myId, this.appendToBodyOnShow);
  }

  public hideModal() {
    ModalUtil.hideModal(this.myId, this.removeFromDomOnHide);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('modalSize')) {
      switch (this.modalSize) {
        case ModalSize.DEFAULT :
          this.myModalSizeClass = '';
          break;
        case ModalSize.FULL_SCREEN :
          this.myModalSizeClass = 'modal-full-screen';
          break;
        case ModalSize.FULL_WIDTH :
          this.myModalSizeClass = 'modal-full-width';
          break;
        case ModalSize.CUSTOM_WIDTH :
          this.myModalSizeClass = '';
          this.hasCustomWidth = true;
          break;
        case ModalSize.LARGE :
          this.myModalSizeClass = 'modal-lg';
          break;
        case ModalSize.SMALL :
          this.myModalSizeClass = 'modal-sm';
          break;
      }
    }
  }

  ngOnDestroy(): void {
    ModalUtil.hideModal(this.myId, this.removeFromDomOnHide);
  }
}

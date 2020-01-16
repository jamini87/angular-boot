import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ModalUtil} from './modal-util';
import {isNullOrUndefined} from 'util';
import {WindowMediaUtil} from './window-media-util';
import {WindowMedias} from './window-medias';
import {ModalSize} from './modal-size.enum';

declare var $: any;

@Component({
  selector: 'nbw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  MyModalSize = ModalSize;
  // private _customWidthPercent: WindowMedias<number> = new WindowMedias<number>();
  @Input() hasHeader = true;
  @Input() hasFooter = true;
  @Input() myId: string = null;
  @Input() autoShow = true;
  @Input() modalSize: ModalSize = ModalSize.DEFAULT;
  @Input() customWidthPercent = new WindowMedias<number>();

  // set customWidthPercent(val: WindowMedias<number>) {
  //   this._customWidthPercent = val;
  //   if (this.hasCustomWidth === true) {
  //     this.handleCustomWith();
  //   }
  // }
  //
  // get customWidthPercent() {
  //   return this._customWidthPercent;
  // }

  @Input() historyBackOnClose = false;
  @Input() dataBackdrop = true;
  @Input() displayBackdrop = true;
  @Input() scrollLargeContents = true;
  @Input() modalDialogCentered = false;
  @Input() removeFromDomOnHide: boolean;
  @Input() appendToBodyOnShow: boolean;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShown: EventEmitter<boolean> = new EventEmitter<boolean>();
  myModalSizeClass = '';
  hasCustomWidth = false;


  defaultWidthPercent = 50;
  currentWidthPercent: number;

  constructor() {
  }

  ngOnInit() {
    if (isNullOrUndefined(this.myId)) {
      this.myId = ModalUtil.generateModalId();
    }
    // alert(this.myId);

    //
    // $('.modal').modal({
    //
    // });
  }

  ngAfterViewInit(): void {
    // $.fn.modal.Constructor.prototype.enforceFocus = function () {
    //   let modal_this = this;
    //   $(document).on('focusin.modal', function (e) {
    //     if (modal_this.$element[0] !== e.target && !modal_this.$element.has(e.target).length
    //       // add whatever conditions you need here:
    //       &&
    //       !$(e.target.parentNode).hasClass('cke_dialog_ui_input_select') && !$(e.target.parentNode).hasClass('cke_dialog_ui_input_text')) {
    //       modal_this.$element.focus();
    //     }
    //   });
    // };
    const that = this;
    if (this.autoShow === true) {
      ModalUtil.showModal(this.myId);
    }
    $('#' + this.myId.toString()).on('hidden.bs.modal', () => {
      // do something…
      that.onClose.emit(true);
      // alert(that.myId);
      if (that.removeFromDomOnHide) {
        ModalUtil.removeModalFromDom(this.myId);
      }
      if (this.historyBackOnClose === true) {
        window.history.back();
      }
    });
    $('#' + this.myId.toString()).on('show.bs.modal', () => {
      that.onShow.emit(true);
    });
    $('#' + this.myId.toString()).on('shown.bs.modal', () => {
      that.onShown.emit(true);
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
          this.handleCustomWith();
          break;
        case ModalSize.LARGE :
          this.myModalSizeClass = 'modal-lg';
          break;
        case ModalSize.X_LARGE :
          this.myModalSizeClass = 'modal-xl';
          break;
        case ModalSize.SMALL :
          this.myModalSizeClass = 'modal-sm';
          break;
      }
    }
  }

  ngOnDestroy(): void {
    ModalUtil.hideModal(this.myId, true);
  }

  private handleCustomWith() {
    if (isNullOrUndefined(this.customWidthPercent)) {
      this.customWidthPercent = new WindowMedias<number>();
    }
    if (isNullOrUndefined(this.customWidthPercent.xs)) {
      this.customWidthPercent.xs = this.defaultWidthPercent;
    }
    if (isNullOrUndefined(this.customWidthPercent.sm)) {
      this.customWidthPercent.sm = this.customWidthPercent.xs;
    }
    if (isNullOrUndefined(this.customWidthPercent.md)) {
      this.customWidthPercent.md = this.customWidthPercent.sm;
    }
    if (isNullOrUndefined(this.customWidthPercent.lg)) {
      this.customWidthPercent.lg = this.customWidthPercent.md;
    }
    if (isNullOrUndefined(this.customWidthPercent.xl)) {
      this.customWidthPercent.xl = this.customWidthPercent.lg;
    }

    if (WindowMediaUtil.isXl()) {
      this.currentWidthPercent = this.customWidthPercent.xl;
    }
    if (WindowMediaUtil.isLg()) {
      this.currentWidthPercent = this.customWidthPercent.lg;
    }
    if (WindowMediaUtil.isMd()) {
      this.currentWidthPercent = this.customWidthPercent.md;
    }
    if (WindowMediaUtil.isSm()) {
      this.currentWidthPercent = this.customWidthPercent.sm;
    }
    if (WindowMediaUtil.isXs()) {
      this.currentWidthPercent = this.customWidthPercent.xs;
    }
  }

  getCssClasses() {
    const cssOptions = {};

    // // add the unique class
    // cssOptions[this.uniqueCssClass] = true;

    // this activates or deactivates the ::ng-deep CSS style
    cssOptions['not-display-modal-backdrop'] = !this.displayBackdrop;
    return cssOptions;
  }
}

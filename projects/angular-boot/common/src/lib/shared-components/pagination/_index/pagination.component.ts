import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Toolkit2} from '@angular-boot/util';

/**
 * Created By Jafar Amini in December 2018
 */
@Component({
  selector: 'shr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() offset: number;
  @Input() indicatorCount: number;
  indicates: number[] = [];

  currentIndicator: number;
  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();

  private _currentPage: number;
  @Input()
  set currentPage(val) {
    this._currentPage = val;
    this.initiateCurrentIndicator(this._currentPage);
  }

  get currentPage(): number {
    return this._currentPage;
  }

  @Input() totalPages: number;

  // @Output() indicatorCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.indicatorCount = this.indicatorCount || 5;
    this.offset = this.offset || 1;
    this.initiateCurrentIndicator(this._currentPage);
    this.generateIndicates();
  }

  generateIndicates() {
    this.indicates = [];
    for (let i = this.offset; i < this.offset + this.indicatorCount; i++) {
      if (i <= this.totalPages) {
        this.indicates.push(i);
      }
    }
  }

  initiateCurrentIndicator(i: number) {
    this.currentIndicator = +(i || 0) + 1;
  }

  setCurrentIndicator(i: number) {
    this.currentIndicator = i;
    this.emitSelectedPage(this.currentIndicator - 1);
  }

  nextimize() {
    if (this.offset + this.indicatorCount <= this.totalPages) {
      this.offset = this.offset + this.indicatorCount;
      this.setCurrentIndicator(this.offset);
    } else {
      if (this.currentIndicator < this.totalPages) {
        this.setCurrentIndicator(this.currentIndicator + 1);
      }
    }
    this.generateIndicates();
  }

  previmize() {
    if (this.offset - this.indicatorCount >= 1) {
      this.offset = this.offset - this.indicatorCount;
      this.setCurrentIndicator(this.offset + this.indicatorCount - 1);
    } else {
      if (this.currentIndicator > 1) {
        this.setCurrentIndicator(this.currentIndicator - 1);
      }
    }
    this.generateIndicates();
  }

  reFirst() {
    this.offset = 1;
    this.setCurrentIndicator(1);
    this.generateIndicates();
  }

  reLast() {
    this.setCurrentIndicator(this.totalPages);
    const co = Math.trunc(this.totalPages / this.indicatorCount);
    if (co * this.indicatorCount === this.totalPages) {
      this.offset = this.totalPages - this.indicatorCount + 1;
    } else {
      this.offset = (co * this.indicatorCount) + 1;
    }
    this.generateIndicates();
  }

  private emitSelectedPage(page: number) {
    this.currentPage = page;
    this.selectedPage.emit(page);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('totalPages')) {
      if (!isNullOrUndefined(this.totalPages)) {
        this.generateIndicates();
      }
    }
    // if (changes.hasOwnProperty('currentPage')) {
    //   if (!isNullOrUndefined(this._currentPage)) {
    //     this.generateIndicates();
    //   }
    // }
  }

  en2Fa(value) {
    return Toolkit2.Common.En2Fa(value);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {isNullOrUndefined} from '@angular-boot/util';
import {Toolkit2} from '@angular-boot/util';

/**
 * Created By Jafar Amini in December 2018
 */
declare type InputPropName = 'size' | 'offset' | 'indicatorCount' | 'showTotalPage' |
  'showSizeSelection' | 'sizeSelectionArray' | 'defaultSizeIndex' | 'totalPages' | 'currentPage';

@Component({
  selector: 'shr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() size = 5;
  @Input() offset: number;
  @Input() indicatorCount: number;
  @Input() showTotalPage = true;
  @Input() showSizeSelection = true;
  @Input() sizeSelectionArray = [5, 10, 20, 50];
  @Input() defaultSizeIndex = 0;
  @Input() totalPages: number;
  @Input() currentPage: number;
  // private _currentPage: number;
  // @Input()
  // set currentPage(val) {
  //   console.log('set currentPage');
  //   this._currentPage = val;
  //   this.initiateCurrentIndicator(this._currentPage);
  // }
  //
  // get currentPage(): number {
  //   return this._currentPage;
  // }

  indicates: number[] = [];
  currentIndicator: number;

  /**
   * @Deprecated use currentPageChange instead
   */
  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  // @Output() indicatorCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.indicatorCount = this.indicatorCount || 5;
    this.offset = this.offset || 1;
    // this.initiateCurrentIndicator(this._currentPage);
    this.initiateCurrentIndicator(this.currentPage);
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
    this.currentPageChange.emit(page);
    this.selectedPage.emit(page);
  }

  private childNgOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        this.onChange(propName as InputPropName, changes);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.childNgOnChanges(changes);
  }

  private onChange(propName: InputPropName, changes: SimpleChanges) {
    switch (propName) {
      case 'currentPage':
        console.log('set currentPage');
        this.initiateCurrentIndicator(this.currentPage);
        break;
      case 'totalPages':
        if (!isNullOrUndefined(this.totalPages)) {
          this.generateIndicates();
        }
        break;
      case 'defaultSizeIndex':
        if (!isNullOrUndefined(this.defaultSizeIndex)) {
          if (this.defaultSizeIndex < 0) {
            this.defaultSizeIndex = 0;
            throw new Error('defaultSizeIndex should not be less than 0');
          } else if (this.defaultSizeIndex >= this.sizeSelectionArray.length) {
            this.defaultSizeIndex = this.sizeSelectionArray.length - 1;
            throw new Error('defaultSizeIndex should not be less than 0');
          }
          this.size = this.sizeSelectionArray[this.defaultSizeIndex];
        }
        break;
    }
  }

  en2Fa(value) {
    return Toolkit2.Common.En2Fa(value);
  }

  onSizeChange(event) {
    console.log(event);
    this.sizeChange.emit(event);
  }
}

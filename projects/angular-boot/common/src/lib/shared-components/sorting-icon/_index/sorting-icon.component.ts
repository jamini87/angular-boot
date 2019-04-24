import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shr-sorting-icon',
  templateUrl: './sorting-icon.component.html',
  styleUrls: ['./sorting-icon.component.scss']
})
export class SortingIconComponent implements OnInit {

  private _sortDirection: string;

  @Input()
  set sortDirection(val) {
    this._sortDirection = val;
  }

  get sortDirection(): string {
    return this._sortDirection;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

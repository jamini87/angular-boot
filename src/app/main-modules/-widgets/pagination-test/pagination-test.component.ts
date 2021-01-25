import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination-test',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.scss']
})
export class PaginationTestComponent implements OnInit {
  currentPage = 0;
  totalPage = 7;
  tmpCurrentPage: number;
  tmpTotalPage: number;

  constructor() {
  }

  ngOnInit() {
  }

  onReset() {
    this.currentPage = this.tmpCurrentPage;
  }

  onResetTotalPage() {
    this.totalPage = this.tmpTotalPage;
  }
}

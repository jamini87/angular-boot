import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-search-input-test',
  templateUrl: './auto-search-input-test.component.html',
  styleUrls: ['./auto-search-input-test.component.scss']
})
export class AutoSearchInputTestComponent implements OnInit {
  termForSearch: string;
  result: string;
  constructor() { }

  ngOnInit() {
  }

  tableFilter(event: string) {
    this.result = event;
  }
}

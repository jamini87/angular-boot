import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $(document).ready( function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
      $('.toggle-sidebar').on('click', function() {
        if (window.matchMedia('(max-width: 768px)').matches) {
          $('#sidebar').toggleClass('active');
        }
      });
    });
  }
}

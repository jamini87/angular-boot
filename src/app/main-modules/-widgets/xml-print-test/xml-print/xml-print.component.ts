import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml-print',
  templateUrl: './xml-print.component.html',
  styleUrls: ['./xml-print.component.scss']
})
export class XmlPrintComponent implements OnInit {
  str= '<?xml version="1.0" encoding="UTF-8"?><note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don\'t forget me this weekend!</body></note>';
  constructor() { }

  ngOnInit() {
  }

}

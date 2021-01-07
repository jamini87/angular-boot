// /**
//  * @author Jafar Amini in March 2018.
//  */
// import {Component, Input, OnChanges, OnInit,
//   SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
// import {isNullOrUndefined} from '@angular-boot/util';
// declare var require: any;
// const format = require('xml-formatter');
// @Component({
//   selector: 'nbw-xml-print',
//   template: '<div #xmlPrintDiv></div>',
//   styleUrls: ['./xml-print.component.scss'],
//   encapsulation: ViewEncapsulation.ShadowDom
// })
//
//
// export class XmlPrintComponent implements OnInit, OnChanges {
//
//   @Input() xml_In;
//   @ViewChild('xmlPrintDiv', {static: true}) xmlPrintDiv;
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   ngOnChanges(changes: SimpleChanges): void {
//     if (!isNullOrUndefined(this.xml_In) && this.xml_In !== '') {
//       const formattedXml = format(this.xml_In);
//       this.output(formattedXml);
//       }
//   }
//
//   output(inp) {
//     this.xmlPrintDiv.nativeElement.appendChild(document.createElement('pre')).innerText = inp;
//   }
// }

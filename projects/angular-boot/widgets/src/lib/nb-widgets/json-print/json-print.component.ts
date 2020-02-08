/**
 * @author Jafar Amini in March 2018.
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'nbw-json-print',
  template: `
      <div>
          <ng-content></ng-content>
          <pre #jsonPrintPre></pre>
      </div>`,
  styleUrls: ['./json-print.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class JsonPrintComponent implements OnInit, OnChanges {
  @Input() json_In;
  @ViewChild('jsonPrintPre') jsonPrintPre;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!isNullOrUndefined(this.json_In) && this.json_In !== '') {
      this.output(this.syntaxHighlight(this.json_In));
    }
  }

  output(inp) {
    // this.jsonPrintDiv.nativeElement.appendChild(
    //   document.createElement('pre')
    //   // .setAttribute('width', '60')
    // ).innerHTML = inp;
    this.jsonPrintPre.nativeElement.innerHTML = inp;
  }

  syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }

}

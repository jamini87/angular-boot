import {Directive, ElementRef, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {isNullOrUndefined} from "util";

@Directive({
  selector: '[nbdAreYouSure]'
})
export class AreYouSureDirective implements OnInit, OnChanges {
  @Output() then = new EventEmitter<boolean>();
  @Output() else = new EventEmitter<boolean>();

  @Input() message: string;

  selfMessage: string;
  constructor(@Inject(ElementRef) private element: ElementRef) {
  }

  ngOnInit(): void {
    const directive = this;
    this.element.nativeElement.onclick = function () {
      const result = confirm('آیا مطمئن هستید؟');
      if (result) {
        directive.then.emit(true);
      } else {
        directive.else.emit(true);
      }
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('message')) {
      if(!isNullOrUndefined(this.message))
        this.selfMessage = this.message;
    }
  }
}

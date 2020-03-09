import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[float-label]'
})
export class FloatLabelDirective {
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }

  @HostListener('change') onMouseEnter() {
    if (this.hostElement.nativeElement.value !== '') {
      this.renderer.addClass(this.hostElement.nativeElement, 'filled');
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, 'filled');
    }
  }
}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActionMode} from '@angular-boot/helper';
import {Toolkit2} from '@angular-boot/util';

@Directive({
  selector: '[nbIfViewMode]'
})
export class IfViewModeDirective {
  @Input() set nbIfViewMode(actionMode: ActionMode) {
    if (Toolkit2.ActionModeUtil.isViewMode(actionMode)) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

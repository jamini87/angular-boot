import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActionMode} from '@angular-boot/util';
import {Toolkit2} from '@angular-boot/util';

@Directive({
  selector: '[nbIfAddOrViewMode]'
})
export class IfAddOrViewModeDirective {
  @Input() set nbIfAddOrViewMode(actionMode: ActionMode) {
    if (Toolkit2.ActionModeUtil.isAddOrViewMode(actionMode)) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

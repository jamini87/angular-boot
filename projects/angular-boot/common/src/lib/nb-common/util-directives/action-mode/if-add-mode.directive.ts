import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActionMode} from '@angular-boot/helper';
import {Toolkit2} from '@angular-boot/util';

@Directive({
  selector: '[nbIfAddMode]'
})
export class IfAddModeDirective {
  @Input() set nbIfAddMode(actionMode: ActionMode) {
    if (Toolkit2.ActionModeUtil.isAddMode(actionMode)) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActionMode} from '@angular-boot/util';
import {Toolkit2} from '@angular-boot/util';


@Directive({
  selector: '[nbIfEditMode]'
})
export class IfEditModeDirective {
  @Input() set nbIfEditMode(actionMode: ActionMode) {
    if (Toolkit2.ActionModeUtil.isEditMode(actionMode)) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

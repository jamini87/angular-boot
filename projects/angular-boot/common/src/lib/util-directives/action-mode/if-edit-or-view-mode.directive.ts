import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActionMode} from '@angular-boot/util';
import {Toolkit2} from '@angular-boot/util';

@Directive({
  selector: '[nbIfEditOrViewMode]'
})
export class IfEditOrViewModeDirective {
  @Input() set nbIfEditOrViewMode(actionMode: ActionMode) {
    if (Toolkit2.ActionModeUtil.isEditOrViewMode(actionMode)) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

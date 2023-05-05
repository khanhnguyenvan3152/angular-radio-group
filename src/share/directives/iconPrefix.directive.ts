import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[iconPrefix]'
})
export class IconPrefixDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}

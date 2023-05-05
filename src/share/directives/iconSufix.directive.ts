import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[iconSufix]'
})
export class IconSufixDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }


}

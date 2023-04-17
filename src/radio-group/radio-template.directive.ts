import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRadioTemplate]',
})
export class RadioTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}

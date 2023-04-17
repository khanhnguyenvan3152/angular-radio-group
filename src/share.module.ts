import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioTemplateDirective } from './radio-group/radio-template.directive';

@NgModule({
  declarations: [RadioGroupComponent, RadioTemplateDirective],
  imports: [CommonModule],
  exports: [RadioGroupComponent, RadioTemplateDirective],
})
export class ShareModule {}

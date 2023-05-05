import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { IconPrefixDirective } from './directives/iconPrefix.directive';
import { IconSufixDirective } from './directives/iconSufix.directive';

@NgModule({
  declarations: [ButtonComponent, IconPrefixDirective, IconSufixDirective],
  imports: [CommonModule],
  exports: [ButtonComponent, IconPrefixDirective, IconSufixDirective],
})
export class SharedModule {}

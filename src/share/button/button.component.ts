import {
  Component,
  ContentChild,
  HostBinding,
  ViewChild,
  Input,
} from '@angular/core';
import { IconPrefixDirective } from '../directives/iconPrefix.directive';
import { IconSufixDirective } from '../directives/iconSufix.directive';

@Component({
  selector: 'button[trudi-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size;
  @Input() variant;
  @Input() disabled: boolean;
  @ContentChild(IconPrefixDirective) iconPrefix!: IconPrefixDirective;
  @ContentChild(IconSufixDirective) iconSufix!: IconSufixDirective;
  ngOnInit(): void {}
  //return classes base on variant, size ex: trudi-btn trudi-btn-large trudi-btn-primary...
  @HostBinding('attr.class') get classes() {
    return 'trudi-btn';
  }

}

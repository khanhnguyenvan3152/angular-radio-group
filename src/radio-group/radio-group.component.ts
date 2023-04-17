import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  forwardRef,
} from '@angular/core';
import { RadioTemplateDirective } from './radio-template.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    },
  ]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {
  @Input() items: any[];
  @Input() templateClass: string = ""
  @ContentChild(RadioTemplateDirective) content: RadioTemplateDirective;
  constructor() {}
  ngOnInit(): void {
  }
  value: string;
  disabled: boolean;

  onChange = (value: string) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}

import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => YesNoButtonGroupComponent)
  }]
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {

  @Input() public value!: string;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  public options = YesNoButtonGroupOptions;
  public id!: string;
  public onChange = (value: string) => { };
  public onTouched = () => { };

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix("yes-no-button-group");
  }

  public activate(value: string): void {
    this.value = value
    this.valueChange.emit(this.value);
    this.writeValue(value)
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
  }
}

enum YesNoButtonGroupOptions {

  YES = 'yes',
  NO = 'no',

}


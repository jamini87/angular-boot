import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Toolkit2} from '@angular-boot/util';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {NG_VALUE_ACCESSOR} from '@angular/forms';


const noop = () => {
};
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoSearchInputComponent),
  multi: true
};

@Component({
  selector: 'nbw-auto-search-input',
  templateUrl: './auto-search-input.component.html',
  styleUrls: ['./auto-search-input.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutoSearchInputComponent implements OnInit, AfterViewInit {

  @Input() placeholder: string;
  @Input() cssClass: string;
  @Input() myId: string = null;
  @Input() debounceTime: number;

  @Output() currentValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    if (isNullOrUndefined(this.myId)) {
      this.myId = Toolkit2.Common.create().uuidv4();
    }
    if (isNullOrUndefined(this.debounceTime)) {
      this.debounceTime = 500;
    }
  }

  inputHandle() {
    const input = document.getElementById(this.myId);
    const example = fromEvent(input, 'keyup')
      .pipe(map(i => i.currentTarget['value']));
    const debouncedInput = example.pipe(debounceTime(this.debounceTime));
    const subscribe = debouncedInput.subscribe(val => {
      console.log(`Debounced Input: ${val}`);
      this.currentValue.emit(val);
    });
  }

  ngAfterViewInit(): void {
    this.inputHandle();
  }


  // -------------[(ngModel)]


  // The internal data model
  private innerValue: any = '';


  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // get accessor
  get value(): any {
    return this.innerValue;
  };

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


}

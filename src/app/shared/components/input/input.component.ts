import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
      private ref: ChangeDetectorRef
  ) {
    this.onBlur = new EventEmitter();
  }

  @Input() appAutoFocus = false;
  @Input() formGroup: FormGroup;
  @Input() control: FormControl;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() id = '';
  @Input() name: string = this.id || '';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() errorMessage: string | boolean = null;
  @Input() extraClass: string | string[] = '';

  @Input() maxLength = 15;
  @Input() minLength = 0;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onBlur: EventEmitter<boolean>;

  // HTML helpers
  objectFn = Object;

  ngOnInit() { }

  blur() {
    this.onBlur.emit(true);
  }

}

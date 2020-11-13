import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, ViewEncapsulation} from '@angular/core';
import {MsButtonBase} from '../button-base';
import {MS_BUTTON_DEFAULT_OPTIONS, MsButtonDefaultOptions} from '../button-options';

@Component({
  selector: 'button[msButton], button[ms-button]',
  templateUrl: 'button.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'ms-button'
  }
})
export class MsButton extends MsButtonBase {
  @Input()
  disabled: boolean = false;

  @Input()
  icon: string;

  @Input()
  secondaryIcon: string;

  constructor(elementRef: ElementRef<HTMLButtonElement>,
              @Optional() @Inject(MS_BUTTON_DEFAULT_OPTIONS) defaultOptions: MsButtonDefaultOptions) {
    super(elementRef, defaultOptions);
  }

}

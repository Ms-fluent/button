import {Component, ElementRef, HostBinding, Inject, Input, Optional} from '@angular/core';
import {MsButtonBase} from '../button-base';
import {MS_BUTTON_DEFAULT_OPTIONS, MsButtonDefaultOptions} from '../button-options';

@Component({
  templateUrl: 'icon-button.html',
  selector: 'button[msIconButton], button[ms-icon-button]',
  host: {
    'class': 'ms-iconButton'
  }
})
export class MsIconButton extends MsButtonBase {
  @Input()
  icon: string = 'Add';

  @Input()
  @HostBinding('class.rounded')
  rounded: boolean;

  constructor(elementRef: ElementRef<HTMLButtonElement>,
              @Optional() @Inject(MS_BUTTON_DEFAULT_OPTIONS) defaultOptions: MsButtonDefaultOptions) {
    super(elementRef, defaultOptions);
  }

}

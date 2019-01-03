import { Directive, HostListener } from '@angular/core';

import { NgControl } from '@angular/forms';

@Directive({
  selector: '[alhAlphaMx]'
})
export class AlphaMxDirective {

  public ALPHA_MX = '^([A-Za-záéíóúñüÁÉÍÓÚÑÜ ])+$';

  constructor(
    private ngControl: NgControl
  ) { }

  /**
   * Maneja evento de cambio en el input y se ejecuta la funcion onInputChange.
   * @param {*} event Valor de input
   * @memberof AlphaMxDirective
   */
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backSpace) {
    const regExp = new RegExp(this.ALPHA_MX);
    if ((regExp.test(event))) {
      this.ngControl.valueAccessor.writeValue(event);
    } else {
      const newVal = event.substring(0, event.length - 1);
      this.ngControl.valueAccessor.writeValue(newVal);
    }
  }

}

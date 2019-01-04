import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[alhDigit]'
})
export class DigitDirective {

  /** Expreción regular que se evalua */
  public DIGIT = '^[0-9]+$';
  /**  Nuevo objeto RegExp */
  regExp = new RegExp(this.DIGIT);

  constructor(
    private ngControl: NgControl
  ) { }

  /**
   * Maneja evento de cambio en el input y se ejecuta la funcion onInputChange.
   * {*} event Valor de input
   * @memberof AlphaMxDirective
   */
  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
    console.log(event);
  }

  /**
   * Maneja el evento de tecla de retroceso enviando true como segundo parametro.
   * {*} event Evento de tecla de retroceso
   * @memberof AlphaMxDirective
   */
  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  /**
   * Evalua los parametros con RegExp y actualiza el contenido del input
   * por medio de ngControl.valueAccessor, si el valor no es valido se remplaza
   * el contenido con la funcion replace.
   * {*} event Valor que se obtiene del input.
   * {*} backSpace Bandera valor true si el evento es desatado por esta tecla.
   * @memberof AlphaMxDirective
   */
  onInputChange(event, backSpace) {
    let newVal: string;
    if (backSpace) {
      newVal = event;
      this.ngControl.valueAccessor.writeValue(newVal);
    } else {
      if ((this.regExp.test(event))) {
        this.ngControl.valueAccessor.writeValue(event);
      } else {
        newVal = event.replace(/['^[0-9]+$']/g, '');
        this.ngControl.valueAccessor.writeValue(newVal);
      }
    }
  }


}

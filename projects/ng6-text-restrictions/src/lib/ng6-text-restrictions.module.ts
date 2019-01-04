import { NgModule } from '@angular/core';
import { AlphaMxDirective } from './alpha-mx/alpha-mx.directive';
import { DigitDirective } from './digit/digit.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    AlphaMxDirective,
    DigitDirective
  ],
  exports: [
    AlphaMxDirective,
    DigitDirective
  ]
})
export class Ng6TextRestrictionsModule { }

import { NgModule } from '@angular/core';
import { DigitDirective } from './digit/digit.directive';
import { AlphaMxDirective } from './alpha-mx/alpha-mx.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    AlphaMxDirective,
    DigitDirective,
  ],
  exports: [
    AlphaMxDirective,
    DigitDirective,
  ]
})
export class Ng6TextRestrictionsModule { }

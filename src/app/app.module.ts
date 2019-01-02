import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6TextRestrictionsModule } from 'ng6-text-restrictions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6TextRestrictionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

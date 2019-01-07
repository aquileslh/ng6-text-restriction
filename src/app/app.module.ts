import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng6TextRestrictionsModule } from 'ng6-text-restrictions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng6TextRestrictionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6TextRestrictionsModule } from 'ng6-text-restrictions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

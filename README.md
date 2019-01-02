# Ng6TextRestriction

[![](https://img.shields.io/badge/release-v1.0.1-blue.svg)](https://github.com/angular/angular-cli)
[![](https://img.shields.io/github/license/aquileslh/ng6-text-restriction.svg?style=social)](/LICENCE)

## Overview
Directives aviables and description
* alhAlphaMx -> Validate insert of characters with RegExp '^([A-Za-záéíóúñüÁÉÍÓÚÑÜ ])+$'

## Installation

### To install

```shell
git clone https://github.com/aquileslh/ng6-text-restriction.git ng6-text-restriction
cd ng6-text-restriction
npm install
ng serve
```

This should start a server with the example playground, which you can view in your browser at `http://localhost:4200`


### To install from NPM and use in your own project

If, after playing with the examples, you decide this library is functional enough to use in your own project, you can [install it from NPM](https://www.npmjs.com/package/ng6-text-restrictions).


```shell
npm i ng6-text-restrictions
```

Then import Ng6TextRestrictionsModule, FormsModule, ReactiveFormsModule in your main application module.

```javascript
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
```

## Using Ng6TextRestrictions

Use inside the form

```html
  <form [formGroup]="validationForm">
  <h3>Example input validation</h3>
  <div>
    <label for="name">Name</label>
    <input
        type="text"
        formControlName="name" 
        placeholder="with validation"
        alhAlphaMx> <!-- Directive for validation-->
  </div>
  ......
  ......
```
Creation FormGroup and FormControl in the component

```javascript
  validationForm = new FormGroup({
    nombre : new FormControl (''),
    edad : new FormControl(''),
  });
```

## License

[MIT](/LICENSE)

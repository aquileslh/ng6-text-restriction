## Contributing

The following is a set of guidelines for contributing its packages.

The source code is composed as the following:

* `projects/ng6-text-restrictions` - Angular ng6-text-restriction main library
* `projects/json-schema-form/src/lib/ng6-text-restrictions.module` - Main module declarations and export of directives
* `projects/json-schema-form/src/lib/alpha-mx` - Validation of caracteres alphabet mexican
* `src` - the demonstration playground example application

## Styleguides

For contributing clone the project.

```shell
git clone https://github.com/aquileslh/ng6-text-restriction.git ng6-text-restriction
cd ng6-text-restriction
npm install
```

### Angular new directive

Create a new branch `feature/mi-validation`

For a new function, you will have to create a directive, which is the logic of validation.
Use the Angular-CLI

```shell
ng generate directive mi-directive/mi-directive --project=ng6-text-restrictions
```

Use two decorator @HostListener and @HostBinding for handle events.

Declare and import the directive exportin main module `projects/ng6-text-restrictions/src/lib/ng6-tect-restrictions.module`.

```javascript
...
....

@NgModule({
    imports: [
        ],
  declarations: [
    AlphaMxDirective,
    MiDirective
  ],
  exports: [
    AlphaMxDirective,
    MiDirective
  ]
})
...
....
```

Add export in `public_api_ts`

```javascript
...
export * from './lib/alpha-mx/alpha-mx.directive';
export * from './lib/digit/mi-directive.directive'; // export new directive

export * from './lib/ng6-text-restrictions.module';
....
```

Send pull requests for review.

For test in local can use directive en module `src/` 

First create the new package with changes this is create in `dis/ng6-text-restrictions`

```shell
npm run build_lib
```

In the module `src/app.module.ts` import the module `Ng6TextRestrictionsModule`

.... or execute

```shell
npm run package
```
This create ...tgz for install with NPM and use in your own project

```shell
npm install ng6-text-restrictions-1.0.1.tgz
```

## Documentation Styleguide

```javascript
 /**
   * Maneja evento de cambio en el input y se ejecuta la funcion onInputChange.
   * @param {*} event Valor de input
   * @memberof AlphaMxDirective
   */
    @HostListener('ngModelChange', ['$event'])...
```
# ngx-translate-extract-marker
This is a fork of a great library by [Kim Biesbjerg](https://github.com/biesbjerg), but as far as I can tell the original library is unfortunately no longer being developed

## Installation
`$ npm install @colsen1991/ngx-translate-extract-marker`

## Mark strings for extraction using the marker function
If, for some reason, you want to extract strings not passed directly to `ngx-translate/TranslateService`'s `get()`, `instant()` or `stream()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Import and use the marker function:

```ts
import { marker } from '@colsen1991/ngx-translate-extract-marker';

marker('Extract me');
```

Or you can alias the `marker()` method:

```ts
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';

_('Extract me');
```

Then run the extract script: `$ ngx-translate-extract`

## Mark strings for extraction using the marker pipe
If, for some reason, you want to extract strings not passed directly to `ngx-translate/TranslatePipe`, you can pass them into a custom marker pipe to let `ngx-translate-extract` know you want to extract them.

Import and use the marker pipe in your `@NgModule`:

```ts
import { MarkerPipe } from '@colsen1991/ngx-translate-extract-marker';

@NgModule({ declarations: [MarkerPipe] })
export class YourModule {
}
```

Then mark strings in your templates:

```angular2html
<your-component [yourInput]="'Hello world' | marker"></your-component>
```

## Mark strings for extraction using the marker directive
If, for some reason, you want to extract strings not passed directly to `ngx-translate/TranslateDirective`, you can wrap them in a custom marker directive to let `ngx-translate-extract` know you want to extract them.

Import and use the marker directive in your `@NgModule`:

```ts
import { MarkerDirective } from '@colsen1991/ngx-translate-extract-marker';

@NgModule({ declarations: [MarkerDirective] })
export class YourModule {}
```

Then mark strings in your templates:

```angular2html
<p marker>Hello World</p>
```

Then run the extract script: `$ ngx-translate-extract`

## ngx-translate-extract
See [ngx-translate-extract](https://github.com/bartholomej/ngx-translate-extract) and [ngx-translate](https://github.com/ngx-translate/core) for more details.

## Credits
Original library, idea and code: [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker) ❤️

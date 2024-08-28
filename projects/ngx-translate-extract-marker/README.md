# ngx-translate-extract-marker
This is a fork of a great library by [Kim Biesbjerg](https://github.com/biesbjerg), but as far as I can tell the original library is unfortunately no longer being developed

## Installation
`$ npm install codeandweb/ngx-translate-extract-marker`

## Mark strings for extraction using the marker function
If, for some reason, you want to extract strings not passed directly to `ngx-translate/TranslateService`'s `get()`, `instant()` or `stream()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Import and use the marker function:

```ts
import { marker } from 'codeandweb/ngx-translate-extract-marker';

marker('Extract me', 'Giving optional context');
```

Or you can alias the `marker()` method:

```ts
import { marker as _ } from 'codeandweb/ngx-translate-extract-marker';

_('Extract me', 'Giving optional context');
```

Then run the extract script: `$ ngx-translate-extract`

## ngx-translate-extract
See [ngx-translate-extract](https://github.com/vendure-ecommerce/ngx-translate-extract) and [ngx-translate](https://github.com/ngx-translate/core) for more details.

## Credits
Original library, idea and code: [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker) ❤️

Update to modern Angular: [@colsen1991/ngx-translate-extract-marker](https://github.com/Husbanken/ngx-translate-extract-marker)

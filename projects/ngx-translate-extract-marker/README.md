# ngx-translate-extract-marker

This is a fork of a great library by [Kim Biesbjerg](https://github.com/biesbjerg), but as far as I can tell, the original library is unfortunately no longer being developed.

We decided to update `ngx-translate`, `ngx-translate-extract`, and this library to the current versions of Angular.

## Installation

```bash
$ npm install @codeandweb/ngx-translate-extract-marker
```

## Mark Strings for Extraction Using the Marker Function

If, for some reason, you want to extract strings that are not passed directly to the `ngx-translate/TranslateService`'s `get()`, `instant()`, or `stream()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Import and use the marker function:

```typescript
import { marker } from '@codeandweb/ngx-translate-extract-marker';

marker('Extract me', 'Giving optional context');
```

Or you can alias the `marker()` function:

```typescript
import { marker as _ } from '@codeandweb/ngx-translate-extract-marker';

_('Extract me', 'Giving optional context');
```

## Extracting IDs

### With ngx-translate-extract

Then run the extract script:

```bash
$ ngx-translate-extract
```

See [ngx-translate-extract](https://github.com/vendure-ecommerce/ngx-translate-extract) and [ngx-translate](https://github.com/ngx-translate/core) for more details.

### With BabelEdit

[BabelEdit](https://www.codeandweb.com/babeledit) is a translation editor that works perfectly with `ngx-translate`.

## Tutorial

Learn more about it in this tutorial: [How to translate your Angular app with ngx-translate](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate)

## Credits

Original library, idea, and code: [@biesbjerg/ngx-translate-extract-marker](https://github.com/biesbjerg/ngx-translate-extract-marker).  
Update to modern Angular: [@colsen1991/ngx-translate-extract-marker](https://github.com/Husbanken/ngx-translate-extract-marker) and [@vandres/ngx-translate-extract-marker](https://github.com/vandres/ngx-translate-extract-marker)

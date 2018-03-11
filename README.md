# aglfn

This package provides the [Adobe Glyph List For New Fonts][d6260ce2] parsed as a JSON array.

  [d6260ce2]: https://github.com/adobe-type-tools/agl-aglfn "Adobe AGL & AGLFN on GitHub"

## Installation

```sh
npm install --save aglfn
```

## Details

Adobe’s AGLFN text file contains 3 fields for each glyph:

1. a unicode value as four uppercase hexadecimal digits, e.g. `00C1`
2. a glyph name, e.g. `Aacute`
3. a character name, e.g. `LATIN CAPITAL LETTER A WITH ACUTE`

In the provided JSON file, each glyph is encoded as an object containing `unicodeValue`, `glyphName` and `charName` properties. For example:

```json
{
  "unicodeValue": "0030",
  "glyphName": "zero",
  "charName": "DIGIT ZERO"
}
```


## Usage

```js
const AGLFN = require('aglfn')

AGLFN.find((glyph) => glyph.unicodeValue === '2203')
// => { unicodeValue: '2203',
//      glyphName: 'existential',
//      charName: 'THERE EXISTS' }

AGLFN.filter((glyph) => glyph.charName.includes('TRIANGLE'))
// => [ { unicodeValue: '25BC',
//        glyphName: 'triagdn',
//        charName: 'BLACK DOWN-POINTING TRIANGLE' },
//      { unicodeValue: '25B2',
//        glyphName: 'triagup',
//        charName: 'BLACK UP-POINTING TRIANGLE' } ]
```

## [License](LICENSE.md)

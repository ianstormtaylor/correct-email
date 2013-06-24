# correct-email

  Correct common misspellings in an email address, based on [Kicksend's Mailcheck](https://github.com/Kicksend/mailcheck) library.

## Installation

    $ component install ianstormtaylor/correct-email

## Example
    
```js
var correct = require('correct-email');
var correction = correct('test@gmai.com');
```

```js
{
  local : 'test',
  domain : 'gmail.com',
  email : 'test@gmail.com'
}
```

## API

### correct(string)
  Returns a correction for the given email `string`, or `false` if nothing to correct.

### correct.threshold(number)
  Change the string distance threshold for matches.

### correct.domains
  The array of domain names to match against.

### correct.tlds
  The array of TLDs to match against.

## License

  MIT


# correct-email

  Correct common misspellings in an email address, based on [Kicksend's Mailcheck](https://github.com/Kicksend/mailcheck) library.

## Installation

    $ component install ianstormtaylor/correct-email

## Example
    
```js
var correct = require('correct-email');
correct('test@gmai.com');
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
  Offers a correction for the given email `string`.

### correct.threshold(number)
  Change the string distance threshold for matches.

### correct.domains
  The array of domain names to match against.

### correct.tlds
  The array of TLDs to match against.

## License

  MIT
describe('correct-email', function () {
  var assert = require('assert')
    , correct = require('correct-email');

  it('should be false with an invalid email', function () {
    assert(false === correct(''));
    assert(false === correct('test@'));
  });

  it('should return false when no suggestion is found', function () {
    assert(false === correct('test@gmail.com'));
    assert(false === correct('ian@ianstormtaylor.com'));
  });

  it('should return the local, domain and email for a suggestion', function () {
    var suggestion = correct('test@gmai.com');
    assert('test' === suggestion.local);
    assert('gmail.com' === suggestion.domain);
    assert('test@gmail.com' === suggestion.email);
  });

  it('should return domain suggestions for lots of cases', function () {
    assert('emaildomain.com' === correct('test@emaildomain.co').domain);
    assert('gmail.com' === correct('test@gmail.con').domain);
    assert('gmail.com' === correct('test@gnail.con').domain);
    assert('gmail.com' === correct('test@GNAIL.con').domain);
    assert('gmail.com' === correct('test@#gmail.com').domain);
    assert('comcast.net' === correct('test@comcast.com').domain);
    assert('hotmail.com' === correct('test@homail.con').domain);
    assert('hotmail.com' === correct('test@hotmail.co').domain);
    assert('facebook.com' === correct('test@fabecook.com').domain);
    assert('yahoo.com' === correct('test@yajoo.com').domain);
  });
});

var closest = require('closest-match')
  , parse = require('email').parse
  , parseTld = require('tld.js');


/**
 * Expose `correct`.
 */

exports = module.exports = correct;


/**
 * Suggest a correction to a potential mistake in an `email` address.
 *
 * @param {String} email
 * @return {String}
 */

function correct (string) {
  var email = parse(string.toLowerCase());
  var local = email.local;
  var domain = email.domain;
  var tld = domain ? parseTld('http://'+domain) : '';
  var correctDomain = closest(domain, domains);

  // full domain
  if (correctDomain && domain !== correctDomain) {
    email.domain = correctDomain;
    email.email = local + '@' + correctDomain;
    return email;
  }

  // tld only
  var correctTld = closest(tld, tlds);
  if (correctTld && tld !== correctTld) {
    correctDomain = domain.substring(0, domain.lastIndexOf(tld)) + correctTld;
    email.domain = correctDomain;
    email.email = local + '@' + correctDomain;
    return email;
  }

  return false;
}


/**
 * Set the threshold for email matching.
 *
 * @param {Number} threshold
 */

exports.threshold = function (threshold) {
  closest.threshold = threshold;
};


/**
 * Domains to spell-check for.
 */

var domains = exports.domains = [
  'aol.com',
  'att.net',
  'comcast.net',
  'facebook.com',
  'gmail.com',
  'gmx.com',
  'google.com',
  'googlemail.com',
  'hotmail.co.uk',
  'hotmail.com',
  'live.com',
  'mac.com',
  'mail.com',
  'me.com',
  'msn.com',
  'sbcglobal.net',
  'verizon.net',
  'yahoo.co.uk',
  'yahoo.com'
];


/**
 * TLDs to spell-check for.
 */

var tlds = exports.tlds = [
  "co.uk",
  "com",
  "net",
  "org",
  "edu",
  "gov"
];
/* (c) 2015 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
/* @pirates: ignore */
var pirates = require('../../../');

function matcher(filename) {
  // TODO: real logic
  return true
}

function compiler(code, filename) {
  return code.replace('@@macroD', 'console.log(\'in macroD\')');
}

pirates.addHook('.js', matcher, compiler);


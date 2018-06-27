'use strict';

var HelloWorld = function() {};

HelloWorld.prototype.hello = function saluer(name) {
  return "Hello World";
};
module.exports = HelloWorld;

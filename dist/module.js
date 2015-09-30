(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    return b * b;
};

var variable = 8;

var MyClass = (function () {
    function MyClass(credentials) {
        _classCallCheck(this, MyClass);

        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    MyClass.prototype.getName = function getName() {
        return this.name;
    };

    return MyClass;
})();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.MyClass = MyClass;

},{}],2:[function(require,module,exports){
'use strict';

var _foo;

var _import = require('./import');

function getCoords() {
  return {
    x: 10,
    y: 22
  };
}

var _getCoords = getCoords();

var x = _getCoords.x;
var y = _getCoords.y;

console.log(x);
// <- 10
console.log(y);
// <- 22

// 25
console.log(_import.square(5));

var cred = {
  name: 'Ritesh Kumar',
  enrollmentNo: 11115078
};

var foo = (_foo = {}, _foo[Symbol.iterator] = function () {
  var i = 0,
      _counter = 0;

  return { next: function next() {
      return { done: _counter == 20, value: ++i };
    } };
}, _foo);

for (var _iterator = foo, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var pony = _ref;

  console.log(pony);
}

var x = new _import.MyClass(cred);

//Ritesh Kumar
console.log(x.getName());

},{"./import":1}]},{},[2]);

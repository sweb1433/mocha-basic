const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function () {
  describe('sayHELLO()', function () {
    it('sayHello should return hello', function () {
      // 2 const result = sayHello();
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type String', function () {
      // 2 const result = sayHello();
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function () {
    it('addNumbers should be above 5', function () {
      // 2 const result = addNumbers(5, 5);
      // let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumber should be a number', function () {
      // 2 const result = addNumbers(5, 5);
      // let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});

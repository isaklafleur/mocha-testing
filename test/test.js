const assert = require('chai').assert;
const expect = require('chai').expect;
const foo = 'bar';
const beverages = { tea: ['chai', 'matcha', 'oolong'] };
const a = 1;

describe('Multiple example tests', function() {
  it('foo should be a string', function() {
    // without optional message
    assert.typeOf(foo, 'string');
  });

  it('foo is a string', function() {
    // with optional message (is not needed if describing the test before the function)
    assert.typeOf(foo, 'string', 'foo is a string');
  });

  it('foo equal `bar`', function() {
    assert.equal(foo, 'bar');
  });

  it('foo`s value has a length of 3', function() {
    assert.lengthOf(foo, 3);
  });

  it('beverages has 3 types of tea', function() {
    assert.lengthOf(beverages.tea, 3);
  });

  it('a`s value is 1', function() {
    assert.equal(a, 1);
  });

  it('a is a number', function() {
    assert.typeOf(a, 'number');
  });

  it('a`s should be larger then 0', function() {
    expect(a).to.be.above(0);
  });
});


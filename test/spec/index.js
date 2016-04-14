'use strict';

var expect = require('chai').expect;


describe('drop-left', function () {

  var dropLeft = require('../../');

  it('common test', function () {

    expect(dropLeft([1, 2, 3])).to.be.eql([2, 3]);
    expect(dropLeft([1, 2, 3], 2)).to.be.eql([3]);
    expect(dropLeft([1, 2, 3], 3)).to.be.eql([]);
    expect(dropLeft([1, 2, 3], 4)).to.be.eql([]);
    expect(dropLeft([], 4)).to.be.eql([]);

    expect(dropLeft([1, 2, 3], '1')).to.be.eql([2, 3]);
    expect(dropLeft([1, 2, 3], -1)).to.be.eql([1, 2, 3]);
    expect(dropLeft([1, 2, 3], 'abc')).to.be.eql([1, 2, 3]);
  });

  it('exception', function () {
    expect(dropLeft).to.throw(Error);
    expect(dropLeft).to.throw(TypeError);
  });

});

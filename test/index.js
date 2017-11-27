var adventOfCode = require('../app.js');
var should = require('should');

describe('Advent of Code', function() {
  describe('When passing a value to my function', function() {
    it('should return the same value', function() {
      var aoc = adventOfCode.Day1(5)
      aoc.should.equal(5);
    });
  });
});

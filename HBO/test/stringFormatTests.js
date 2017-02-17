var assert = require("assert");
var chai = require('chai');
var StringFormat = require('../src/stringFormat');
chai.should();

describe("The String Format method", function(){

  it("Should be albe to replace a single ", function(){
    var expectedString = "abc";
    var actualString = StringFormat.stringFormat("{1}{2}{3}", "a", "b", "c")
    actualString.should.equal(expectedString);
  });

});
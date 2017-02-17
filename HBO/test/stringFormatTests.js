var assert = require("assert");
var chai = require('chai');
var Combinations = require('../src/stringFormat');
chai.should();

describe("The String Format method", function(){

  it("Should be albe to replace a single ", function(){
    var expectedPath = "C:\Users\Steve\Documents\GitHub\InterviewQuestion\HBO";
    var actualPath = ConnanicalPath.connanicalPath("./");
    actualPath.should.be.expectedPath;
  });

});
var assert = require("assert");
var chai = require('chai');
var ConnanicalPath = require('../src/connanicalPath');
chai.should();

describe("The Connanical path method", function(){

  it("Should be able to find the current directory", function(){
    var expectedPath = "C:\Users\Steve\Documents\GitHub\InterviewQuestion\HBO";
    var actualPath = ConnanicalPath.connanicalPath("./");
   actualPath.should.equal(expectedPath);
  });

  it("Should be able to find the current user's home directory", function(){
    var expectedPath = "C:\Users\Steve";
    var actualPath = ConnanicalPath.connanicalPath("~/");
    actualPath.should.equal(expectedPath);
  });

});
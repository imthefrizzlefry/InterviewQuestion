'use strict'
var assert = require("assert");
var chai = require('chai');
var StringFormat = require('../src/stringFormat.js');
chai.should();

describe("The String Format method", function(){

  it("Should be able to combine strings together", function(){
    var expectedString = "abc";
    var actualString = "{0}{1}{2}".format("a", "b", "c"); // StringFormat.stringFormat("{1}{2}{3}", "a", "b", "c")
    actualString.should.equal(expectedString);
  });

  it("Should be able to skip arguements that are not used in format", function(){
    var expectedString = "abc";
    var actualString = "ab{2}".format("x", "y", "c"); // StringFormat.stringFormat("ab{3}", "x", "y", "c")
    actualString.should.equal(expectedString);
  });

  it("Should be able to ignore format that includes a reference to non-existant parameters", function(){
    var expectedString = "ab{3}";
    var actualString = "ab{3}".format("x", "y"); // StringFormat.stringFormat("ab{3}", "x", "y")
    actualString.should.equal(expectedString);
  });

  it("Should not replace values based on formatted result", function(){
    var expectedString = "a{3}b";
    var actualString = "{0}3{1}".format("a{", "}b", "c"); // StringFormat.stringFormat("{1}3{2}", "a{", "}b", "c")
    actualString.should.equal(expectedString);
  });

  it("Should not replace values that do not need replacing", function(){
    var expectedString = "nothing to see here";
    var actualString = "nothing to see here".format("a", "b", "c"); // StringFormat.stringFormat("nothing to see here", "a", "b", "c")
    actualString.should.equal(expectedString);
  });

  it("Should be able to handle multiple character replacements in format", function(){
    var expectedString = "We Love Tests";
    var actualString = "{0} {1} {2}".format("We", "Love", "Tests"); // StringFormat.stringFormat("{1} {2} {3}", "We", "Love", "Tests")
    actualString.should.equal(expectedString);
  });

  it("Should be able to handle multiple character replacements in format with special characters", function(){
    var expectedString = "We Lo{2}ve Tests";
    var actualString = "{0} {1} {2}".format("We", "Lo{2}ve", "Tests"); // StringFormat.stringFormat("{1} {2} {3}", "We", "Lo{3}ve", "Tests")
    actualString.should.equal(expectedString);
  });

  it("Should be able to replace an attribute that appears multiple times in format", function(){
    var expectedString = "Foo Bar: Foo Baz";
    var actualString = "{0} {1}: {0} {2}".format("Foo", "Bar", "Baz"); // StringFormat.stringFormat("{1} {2}: {1} {3}", "Foo", "Bar", "Baz")
    actualString.should.equal(expectedString);
  });

  it("Should be able to replace an attribute that is not in order within format", function(){
    var expectedString = "Bar Foo: Foo Baz";
    var actualString = "{1} {0}: {0} {2}".format("Foo", "Bar", "Baz"); // StringFormat.stringFormat("{2} {1}: {1} {3}", "Foo", "Bar", "Baz")
    actualString.should.equal(expectedString);
  });    

});
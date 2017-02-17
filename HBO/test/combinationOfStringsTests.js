var assert = require("assert");
var chai = require('chai');
var Combinations = require('../src/combinedString');
chai.should();

describe("Function to check if strings A and B can combined to make string C", function(){

  it("Should work with the example input", function(){
    Combinations.combinationOfStrings("abc", "123", "a1b2c3").should.be.true;
    Combinations.combinationOfStrings("123", "abc", "a1b2c3").should.be.true;
  });

  it("Should allow Both input strings to be the same", function(){
    Combinations.combinationOfStrings("abc", "abc", "abcabc").should.be.true;
  });

  it("Should allow the first string to be longer than the second", function(){
    Combinations.combinationOfStrings("1234", "abc", "a1b2c34").should.be.true;
  });

  it("Should allow the second string to be longer than the first", function(){
    Combinations.combinationOfStrings("123", "abcd", "a1b2cd3").should.be.true;
  });
  it("Should match upper and lower case to eachother", function(){
    Combinations.combinationOfStrings("123", "aBcd", "a1B2cd3").should.be.true;
    Combinations.combinationOfStrings("123", "abcD", "a1b2cD3").should.be.true;
  });
  it("Should match all empty strings", function(){
    Combinations.combinationOfStrings("", "", "").should.be.true;
  });
  it("Should match A or B is an empty string", function(){
    Combinations.combinationOfStrings("a", "", "a").should.be.true;
    Combinations.combinationOfStrings("", "z", "z").should.be.true;
  });
});

describe("Function to check that strings A and B cannot be combined to make string C", function(){
  it("Should not allow extra characters in string A", function(){
    Combinations.combinationOfStrings("abcd", "123", "a1b2c3").should.be.false;
  });
  it("Should not allow extra characters in string B", function(){
    Combinations.combinationOfStrings("abc", "1234", "a1b2c3").should.be.false;
  });
  it("Should not allow extra characters in string C", function(){
    Combinations.combinationOfStrings("abc", "123", "a1b2c34d").should.be.false;
    Combinations.combinationOfStrings("", "", "a").should.be.false;
  });
  it("Should not match characters from string C that are out of order", function(){
    Combinations.combinationOfStrings("abc", "123", "3a1b2c").should.be.false;
  });
  it("Should not match incorrect case", function(){
    Combinations.combinationOfStrings("aBc", "123", "a1b2c34d").should.be.false;
  });
});

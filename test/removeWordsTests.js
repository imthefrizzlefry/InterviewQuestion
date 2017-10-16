'use strict'
var assert = require("assert");
var chai = require('chai');
var WordRemover = require('../src/removeWords');
chai.should();

describe("A function to remove a particular word from a sentence.", () => {
    describe("Two examples provided as part of the problem statement.", () => {

        // removeWordFromSentence(“This is a test.”, “test”);
        // will return “This is a”
        it("Removes a word from a given sentence including punctuation following the word.", () => {
            var inputSentence = "This is a test.",
                inputWord = "test",
                expectedResult = "This is a";
            
            WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        // removeWordFromSentence(“This test is good.”, “test”);
        // will return “This is good.”
        it("Removes a word from the middle of a sentence including one of the spaces.", () => {
            var inputSentence = "This test is good.",
            inputWord = "test",
            expectedResult = "This is good.";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });
    });

    describe("Candidate's Additional Unit Tests", () => {

        it("Removes nothing when the word to be removed is an empty string.", () => {
            var inputSentence = "This is a sample of a sentence.",
            inputWord = "",
            expectedResult = "This is a sample of a sentence.";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        it("Removes nothing when the word to be removes is null", () => {
            var inputSentence = "This is a sample of a sentence.",
            inputWord = null,
            expectedResult = "This is a sample of a sentence.";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        it("Removes the last word in a sentence when there is no punctuation", () => {
            var inputSentence = "the test is to remove the last word",
            inputWord = "word",
            expectedResult = "the test is to remove the last";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        it("Removes a word before a comma that is in the middle of the sentence", () => {
            var inputSentence = "The sentence is more complex, than a simple idea.",
            inputWord = "complex",
            expectedResult = "The sentence is more than a simple idea.";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        it("Removes a word that appears multiple times in the same sentence", () => {
            var inputSentence = "The happy person was a happy poet.",
            inputWord = "happy",
            expectedResult = "The person was a poet.";

        WordRemover.removeWordsFromSentence(inputSentence, inputWord).should.equal(expectedResult);
        });

        
    });
});
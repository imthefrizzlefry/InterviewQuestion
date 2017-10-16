'use strict'
// String removeWordFromSentence(String sentence, String word);

// whitespace before when word is the last in sentence
// \s*test\S*

var removeWordsFromSentence = (sentence, word) => {
var re = new RegExp("\\s*" + word + "\\S*", "g");
    return (word && word !== "") ? sentence.replace(re, '') : sentence;
};

module.exports.removeWordsFromSentence = removeWordsFromSentence;
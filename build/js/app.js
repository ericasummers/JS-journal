(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var totalWords = this.body.split(" ").length;
  return totalWords;
};

Entry.prototype.vowelCount = function() {
  var vowels = ["a", "e", "i", "o", "u"];
  var vowelCount = 0;
  var entryLetters = this.body.split("");
  for (var i = 0; i < entryLetters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (entryLetters[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
};

Entry.prototype.consonantCount = function() {
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var consonantCount = 0;
  var entryLetters = this.body.toLowerCase().split("");
  for (var i = 0; i < entryLetters.length; i++) {
    for (var j = 0; j < consonants.length; j++) {
      if (entryLetters[i] === consonants[j]) {
        consonantCount++;
      }
    }
  }
  return consonantCount;
};

Entry.prototype.getTeaser = function() {
  var sentences = this.body.split(".");
  var teaserSentence = [];
  var firstSentenceWords = sentences[0].split(" ");
  var sentenceWordCount = firstSentenceWords.length;
  if (sentenceWordCount <= 8) {
    teaserSentence.push(sentences[0]);
  } else {
    for (var i = 0; i < 8; i++) {
      teaserSentence.push(firstSentenceWords[i]);
    }
    teaserSentence = teaserSentence.join(" ");
  }
  return teaserSentence;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $("#submit-entry").submit(function(event) {
    event.preventDefault();

    var entryTitle = $("#title").val();
    var entryBody = $("#body").val();

    var newEntry = new Entry(entryTitle, entryBody);
    var wordCount = newEntry.countWords();
    var vowelCount = newEntry.vowelCount();
    var consonantCount = newEntry.consonantCount();
    var teaserSentence = newEntry.getTeaser();

    $("#journal-entries").prepend("<li>" + entryTitle + " (wordcount: " + wordCount + "): <br>" + "Teaser: " + teaserSentence + "<br>" + entryBody + ". This contains " + vowelCount + " vowels and " + consonantCount + " consonants.</li>");

  });
});

$(document).ready(function() {
  $('#time').text(moment());
});

var apiKey = 'b2277cb20bcd24ac17786d778be3abce';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text('The humidity in ' + city + ' is ' + response.main.humidity + '%');
    });
  });
});

},{"./../js/journal.js":1}]},{},[2]);

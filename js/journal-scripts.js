function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var totalWords = this.body.split(" ").length;
  return totalWords;
}

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
}

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
}

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
}


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

    $("#journal-entries").prepend("<li>" + entryTitle + " (wordcount: " + wordCount + "): <br>"
    + "Teaser: " + teaserSentence + "<br>"
     + entryBody + ". This contains " + vowelCount + " vowels and " + consonantCount + " consonants.</li>");

  });
});

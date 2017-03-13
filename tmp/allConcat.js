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

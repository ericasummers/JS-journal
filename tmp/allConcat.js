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

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val('');
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

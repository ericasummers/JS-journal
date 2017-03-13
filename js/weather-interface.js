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

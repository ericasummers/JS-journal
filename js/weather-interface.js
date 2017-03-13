var apiKey = 'b2277cb20bcd24ac17786d778be3abce';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val('');
    $('.showWeather').text('The city you have chosen is ' + city + '.');
  });
});

$(document).ready(function()

  {
    var lat, lon, api_url;
    $('#sun').hide();
    $('#rain').hide();
    $('#cloud').hide();
    $('#snow').hide();

    if ("geolocation" in navigator) {

      $('#showTemp').on('click', function() {
        navigator.geolocation.getCurrentPosition(gotLocation);

        function gotLocation(position) {
          lat = position.coords.latitude;
          lon = position.coords.longitude;

          api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
            lat + '&lon=' +
            lon + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

          $.ajax({
            url: api_url,
            method: 'GET',
            success: function(data) {
              var tempr = data.main.temp;

              $('#result').text(tempr + '°');
              switch (data.weather[0].description) {
                case 'clear sky':
                  $("#sun").show();
                  break;
                case 'clear sky':
                  $("#sun").show();
                  break;
                case 'few clouds':
                  $("#sun").show();
                  break;
                case 'scattered clouds':
                  $("#cloud").show();
                  break;
                case 'broken clouds':
                  $("#cloud").show();
                  break;
                case 'shower rain':
                  $("#rain").show();
                  break;
                case 'rain':
                  $("#rain").show();
                  break;
                case 'thunderstorm':
                  $("#rain").show();
                  break;
                case 'snow':
                  $("#snow").show();
                  break;
                case 'mist':
                  $("#cloud").show();
                  break;

              }
            }
          });
        }
      });

    } else {
      alert('Your browser doesnt support geolocation.');
    }
    if ("geolocation" in navigator) {

      $('#Fahrenheit').on('click', function() {
        navigator.geolocation.getCurrentPosition(gotLocation);

        function gotLocation(position) {
          lat = position.coords.latitude;
          lon = position.coords.longitude;

          api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
            lat + '&lon=' +
            lon + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

          $.ajax({
            url: api_url,
            method: 'GET',
            success: function(data) {
              var tempr = data.main.temp;
              var f = tempr * 9 / 5 + 32;
              $('#result').text(f + '°');
              switch (data.weather[0].description) {
                case 'clear sky':
                  $("#sun").show();
                  break;
                case 'clear sky':
                  $("#sun").show();
                  break;
                case 'few clouds':
                  $("#sun").show();
                  break;
                case 'scattered clouds':
                  $("#cloud").show();
                  break;
                case 'broken clouds':
                  $("#cloud").show();
                  break;
                case 'shower rain':
                  $("#rain").show();
                  break;
                case 'rain':
                  $("#rain").show();
                  break;
                case 'thunderstorm':
                  $("#rain").show();
                  break;
                case 'snow':
                  $("#snow").show();
                  break;
                case 'mist':
                  $("#cloud").show();
                  break;

              }
            }
          });
        }
      });

    } else {
      alert('Your browser doesnt support geolocation.');
    }

  });
jQuery(document).ready(function($) {

  /* Edit these variables */
  var api = API.weatherKey;
  var state = "VA";
  var city = "Annandale";

  $.ajax({
  url: "http://api.wunderground.com/api/" + api + "/forecast/conditions/q/" + state + "/" + city + ".json",
  dataType : "jsonp",
  success : function(parsed_json)
      {
	  var icon_json = '<img src ="src/Icons/Weather/Cloud.svg"/>';
	  var temp_json = parsed_json['current_observation']['temp_f'];
		temp_json += "<span>°F</span>";
	  var condition_json = parsed_json['current_observation']['weather'];
	  var real_feel_json = "Feels Like " + parsed_json['current_observation']['feelslike_f'] + "°F";
	  var wind_json = 'Winds are ' + parsed_json['current_observation']['wind_string'];
	  var location_json = city + ', ' + state;


  document.getElementById("weather-icon").innerHTML = icon_json;
  document.getElementById("temp").innerHTML = temp_json;
  document.getElementById("condition").innerHTML = condition_json;
  document.getElementById("real-feel").innerHTML = real_feel_json;
  document.getElementById("wind").innerHTML = wind_json;
  document.getElementById("location").innerHTML = location_json;


  }
  });
});


//trying to get this to print on the webpage but haven't been able to figure it out yet
//please chime in if you think you might know how to make it work!

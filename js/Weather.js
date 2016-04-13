jQuery(document).ready(function ($) {

    /* Edit these variables */
    var api = API.weatherKey;
    var state = "VA";
    var city = "Annandale";

    $.ajax({
        url: "http://api.wunderground.com/api/" + api + "/forecast/conditions/q/" + state + "/" + city + ".json", //contact this url
        dataType: "jsonp", //this is the datatype of our file
        success: function (parsed_json) //on successfully submitting api call run the code below:
            {
                var icon_json = '<img src ="src/Icons/Weather/Sun.svg"/>';
                if (parsed_json['current_observation']['weather'] == "Cloudy") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Fog") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud-Fog.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Partly Cloudy") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud-Sun.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Rain") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud-Rain.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Snow") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud-Snow.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Thunderstorm" || parsed_json['current_observation']['weather'] == "Thunderstorms") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud-Lightning.svg"/>';
                } else if (parsed_json['current_observation']['weather'] == "Overcast") {
                    icon_json = '<img src ="src/Icons/Weather/Cloud.svg"/>';
                } else {

                    icon_json = '<img src ="src/Icons/Weather/Cloud-Sun.svg"/>';
                }


                var temp_json = parsed_json['current_observation']['temp_f'];
                temp_json += " " + "<span>&degF</span>";

                var condition_json = parsed_json['current_observation']['weather']; //Parses current conditions
                var real_feel_json = "Feels Like " + parsed_json['current_observation']['feelslike_f'] + "&degF"; //Parses how it actually feel
                var wind_json = parsed_json['current_observation']['wind_mph'] + " mph"; //Winds
                var location_json = city + ', ' + state; //Location




                document.getElementById("weather-icon").innerHTML = icon_json;
                document.getElementById("temp").innerHTML = temp_json;
                document.getElementById("condition").innerHTML = condition_json;
                // document.getElementById("real-feel").innerHTML = real_feel_json;
                document.getElementById("wind").innerHTML = wind_json;
                document.getElementById("location").innerHTML = location_json;


            }
    });
});


//trying to get this to print on the webpage but haven't been able to figure it out yet
//please chime in if you think you might know how to make it work!

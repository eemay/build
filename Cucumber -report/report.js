$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherService.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "\n      As weather web service user\n\n      I will be able to get the weather information by the predefined operations in the WSDL",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Get the city weather information by zipcode",
  "description": "",
  "id": ";get-the-city-weather-information-by-zipcode",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@getWeatherByZipcode"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I have a list of zipcode",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I use the weather service to get the weather information",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the information should be found successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WeatherTestByZipCode.i_have_a_list_of_zipcode()"
});
formatter.result({
  "duration": 27139712180,
  "status": "passed"
});
formatter.match({
  "location": "WeatherTestByZipCode.i_use_the_weather_service_to_get_the_weather_information()"
});
formatter.result({
  "duration": 19854930682,
  "status": "passed"
});
formatter.match({
  "location": "WeatherTestByZipCode.the_information_should_be_found_successfully()"
});
formatter.result({
  "duration": 720545652,
  "status": "passed"
});
});
var city = document.getElementById('city-name')
var responseText = document.getElementById('response-text');
var searchBtn = document.getElementById('search-btn')


function getApi() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cea924180544dde5b612be105dafb515&units=imperial")
    .then(function (response) {
      console.log(response);
      return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
}

getApi();
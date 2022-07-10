var mom = moment().format('MMMM Do YYYY, h:mm:ss a'); //Current date
console.log(mom);



var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"

function DataCity(){
     var city= $("#icon_prefix").val();
     console.log(city);
}

function Weather_app(){


     var url = (`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${Number}&appid=${keyCR}`);

     var climateAPI = fetch(url).then(function(ResposeWeather){
          var WeatherData = ResposeWeather.json();
          console.log(WeatherData);

     });



} 

//Weather_app();
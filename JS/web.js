


var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"


function DataCity(){
     var mom;
     for(var i = 0; i<5; i++ ){
          mom = moment().add([i], 'days').calendar();
          $(`#date${i}`).text(mom);
     }
     var Acdate = moment().format(' MMMM Do YYYY');

     $("#startSearch").on("click",function(hey){
          var city= $("#icon_prefix").val();
          var CityU = city.toUpperCase();

          $(`#city`).text(CityU).append(Acdate);

          for(var i=0 ; i<5;i++){
               $(`#temp${i}`).text("").append("Temp: ");
               $(`#wind${i}`).text("").append("Wind: ");
               $(`#humidity${i}`).text("").append("Humidity: ");
               
               $(`.temp${i}`).text("").append("Temp: ");
               $(`.wind${i}`).text("").append("Wind: ");
               $(`.humidity${i}`).text("").append("Humidity: ");

          }
          
          $("#uv").text("").append("UV index: ");
          Weather_app(city);
     })
}

function Weather_app(city){

     var url = (`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${Number}&appid=${keyCR}`);
     var cityName;
     var latCity;
     var lonCity

     var climateAPI = fetch(url).then(function(ResposeWeather){
          var WeatherData = ResposeWeather.json();
          return WeatherData;
     })
     .then(function(ArrData){
          cityName = ArrData[0].name;
          console.log(cityName);
          latCity = ArrData[0].lat;
          //console.log(latCity);
          lonCity = ArrData[0].lon;
          //console.log(lonCity);  

          passData(latCity,lonCity);

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
     ;
} 

function passData(lat,long){
     var url = (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=5&appid=${keyCR}`);

     var DataWeather = fetch(url).then(function(ResponseWeb){
          var WeatherData = ResponseWeb.json();
          return WeatherData;
     })
     .then(function(conditions){

          $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&cnt=5&appid=${keyCR}`).then(function(UV){
               dataUV = UV.current.uvi;
               $("#uv").append(dataUV);
               console.log(dataUV);
          })

          var data = conditions.list;
          console.log(conditions);

          for (var i=0 ;i<data.length ; i++ ){
               var temp = data[i].main.temp;
               var wind = data[i].wind.speed;
               var hum = data[i].main.humidity;
               var icon = data[i].weather[0].icon;

               var iconurl = "http://openweathermap.org/img/w/"+icon+".png";
               $(`#icon${i}`).attr("src",iconurl);
               $(`.icon${i}`).attr("src",iconurl);

               $(`.temp${i}`).append(temp).append(" F");
               $(`.wind${i}`).append(wind).append(" MPH");
               $(`.humidity${i}`).append(hum).append("%");

               $(`#temp${i}`).append(temp).append(" F");
               $(`#wind${i}`).append(wind).append(" MPH");
               $(`#humidity${i}`).append(hum).append("%");
               console.log(temp);
          }

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
}

console.log(DataCity());
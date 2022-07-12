


var Number = "5"
var keyCR = "3b7d870a84d61ceaae66a2fbe9363f4a"
var saveL;
var uv = document.querySelector("#uv");

function DataCity(){
     console.log(saveL);
     var mom;
     for(var i = 0; i<5; i++ ){
          mom = moment().add([i], 'days').calendar();
          $(`#date${i}`).text(mom);
     }
     var Acdate = moment().format(' MMMM Do YYYY');

     $("#startSearch").on("click",function(hey){
          var city= $("#icon_prefix").val();
          localStorage.setItem("City",city);
          uv.classList.remove();
          saveLoc(city);
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
     $("#hibtn").on("click",function(hey){
          var city= $("#hibtn").text();
          console.log(city);
          //.localStorage.setItem("City",city);
          uv.classList.remove();
          //saveLoc(city);
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

function saveLoc(city){
     valCity = city;
     saveL= localStorage.getItem("City");
     $("#hibtn").text(saveL);
     var HistoryCity = document.createElement("button");
     HistoryCity.type= "button";

     //HistoryCity.innerHTML(valCity);
     return saveL;
}

function Weather_app(city){

     var url = (`https://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${Number}&appid=${keyCR}`);
     var cityName;
     var latCity;
     var lonCity

     var climateAPI = fetch(url).then(function(ResposeWeather){
          var WeatherData = ResposeWeather.json();
          return WeatherData;
     })
     .then(function(ArrData){
          cityName = ArrData[0].name;
          //console.log(cityName);
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
               var dataUV = UV.current.uvi;
               $("#uv").append(dataUV);
               if (dataUV <= 2){
                    uv.classList.add("UVLow");
               }else{
                    uv.classList.add("UVHigh");
               }
               //console.log(dataUV);
          })

          var data = conditions.list;
          //console.log(conditions);

          for (var i=0 ;i<data.length ; i++ ){
               var temp = (data[i].main.temp-275.15)*9/5+(32);
               var wind = data[i].wind.speed;
               var hum = data[i].main.humidity;
               var icon = data[i].weather[0].icon;

               var iconurl = "http://openweathermap.org/img/w/"+icon+".png";
               $(`#icon${i}`).attr("src",iconurl);
               $(`.icon${i}`).attr("src",iconurl);

               $(`.temp${i}`).append(temp.toFixed(2)).append(" F");
               $(`.wind${i}`).append(wind).append(" MPH");
               $(`.humidity${i}`).append(hum).append("%");

               $(`#temp${i}`).append(temp.toFixed(2)).append(" F");
               $(`#wind${i}`).append(wind).append(" MPH");
               $(`#humidity${i}`).append(hum).append("%");
               //console.log(temp);
          }

     })
     .catch(function(err){
          console.log(err);
          console.log('here is an error');
     })
}


saveLoc()
console.log(saveLoc);
DataCity();
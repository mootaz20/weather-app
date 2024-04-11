import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http : HttpClient = inject(HttpClient);
  cityName : string;
  stateName : string;
  lat : string;
  lon : string;

  getWeather(){
    console.log(this.cityName);
    return this.http.get('https://api.openweathermap.org/geo/1.0/direct',{params:{
        q: this.cityName,
        limit: 100,
        appid : '13ff98e815543aa6f68a36bc1b8263f9'
    }});
  }
  getCityDetails(res){
   for (let response of res) {
    if (response.state === this.stateName && response.name === this.cityName) {
      this.lat = response.lat; 
      this.lon = response.lon; 
      console.log(this.lat + " " + this.lon);
    }
  }
  return this.http.get('https://api.openweathermap.org/data/2.5/weather',{params:{
    lat : this.lat,
    lon : this.lon,
    appid : '13ff98e815543aa6f68a36bc1b8263f9'
  }});
  }
  
}

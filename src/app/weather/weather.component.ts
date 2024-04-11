import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  httpService : HttpService = inject(HttpService);
  router : Router = inject(Router);
  myWeather : any;
  isLoading : boolean = true;
  iconUrl : string;

  ngOnInit(): void {
  this.httpService.getWeather().subscribe({
    next: (res)=>{
      console.log(res);
      this.httpService.getCityDetails(res).subscribe({
        next: (res)=>{
          console.log(res);
          this.myWeather = res;
          this.isLoading = false;
          this.iconUrl =  'https://openweathermap.org/img/wn/'+ this.myWeather.weather[0].icon +'@2x.png';
          console.log(this.myWeather);
        },
        error: (err)=>{
         this.router.navigate(['notFound']);
        }
      });
    },
    error: (err)=>{
      this.router.navigate(['notFound']);
    }
  });;
  }

  image(){
    switch(this.myWeather.weather[0].icon){
      case  "01d": return "assets/clear.jpg";
      case  "01n": return "assets/clearn.jpg";
      case  "02d": return "assets/few.jpg";
      case  "02n": return "assets/fewn.jpg";
      case  "03d": return "assets/scattered.jpg";
      case  "03n": return "assets/scatteredn.jpg";
      case  "04d": return "assets/broken.jpg";
      case  "04n": return "assets/brokenn.jpg";
      case  "09d": return "assets/showerRain.jpg";
      case  "09n": return "assets/showerRainn.jpg";
      case  "10d": return "assets/rain.jpg";
      case  "10n": return "assets/rainn.jpg";
      case  "11d": return "assets/thunderstorm.jpg";
      case  "11n": return "assets/thunderstormn.jpg";
      case  "13d": return "assets/snow.jpg";
      case  "13n": return "assets/snown.jpg";
      case  "50d": return "assets/mist.jpg";
      case  "50n": return "assets/mistn.jpg";
      default :   return "assets/default.jpg"
    }
  }
  

}

import { Component, inject } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  httpService : HttpService = inject(HttpService);
  cityName : string;
  stateName : string;
  

  onClick(){
    this.httpService.cityName = this.cityName;
    this.httpService.stateName = this.stateName;
    // console.log("City Name is " + this.httpService.cityName);
    // console.log("state Name is " + this.httpService.stateName);


  }


}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'weather',component: WeatherComponent},
  {path: 'notFound',component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

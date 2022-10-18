import { Component } from '@angular/core';
import stats from '../models/stats.json';
import todayStats from '../models/todayStats.json';

interface Stats{
  "id": Number,  
  "logo": String,  
  "logoAlt": String,
  "icon": String,
  "iconAlt": String,
  "name": String,
  "followers": String,
  "type": String,
  "today": String,  
  "positive": Boolean  
}

interface TodayStats{
  "id": Number, 
  "title": String, 
  "logo": String,  
  "logoAlt": String,
  "icon": String,
  "iconAlt": String,
  "num": String,
  "percentage": String,  
  "positive": Boolean  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Social Media Dashboard';

  stats: Stats[] = stats
  todayStats: TodayStats[] = todayStats

  getColor(color: Boolean){
    if(color == true){
      return "text-limeGreen"
    }else{
      return "text-brightRed"
    }
  }
}

import { Component } from '@angular/core';
import stats from '../models/stats.json';
import todayStats from '../models/todayStats.json';
interface Stats{
  "id": Number,  
  "logo": String,  
  "logoAlt": String,
  "color": String,
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
export class AppComponent{
  name = 'Social Media Dashboard';
  isDark = true;

  stats: Stats[] = stats
  todayStats: TodayStats[] = todayStats

  toggleMode(){
    let toggle = <HTMLInputElement> document.getElementById('toggle');
    if(this.isDark){
      return !toggle.checked;
    }else{
      return toggle.checked;
    }
  }

  getColor(color: Boolean){
    if(color == true){
      return "text-limeGreen"
    }else{
      return "text-brightRed"
    }
  }

  getBrandColor(brandColor: String){
    switch(brandColor){
      case "facebook":
        return "bg-facebook";
      case "twitter":
        return "bg-twitter";
      case "instagram":
        return "bg-gradient-to-r from-instagram1 to-instagram2";
      case "youtube":
        return "bg-youtube";
      default:
        throw Error('Invalid Color');
    }
  }
}

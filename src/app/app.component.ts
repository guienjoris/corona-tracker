import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  worldData : any [] = [];
  country:string;
  confirmedCountry : any;
  deathCountry: any;
  recoveredCountry: any;
  displayCountry: boolean = false;
  countryName: string ;
  constructor(private api : ApiService){}
  ngOnInit(){

    this.api.getAll().subscribe((data:any)=>{

      this.worldData.push(data.latest , data.confirmed.last_updated)
    })
    
  }
  getCountry(country:string){
    this.api.getAll().subscribe((data:any)=>{
      this.confirmedCountry = data.confirmed.locations.find(e => e.country_code === country) ;
      this.deathCountry = data.deaths.locations.find(e => e.country_code === country);
      this.recoveredCountry = data.recovered.locations.find(e => e.country_code === country)
      this.countryName = this.confirmedCountry.country; 
      if(this.countryName != null){
        this.displayCountry = true;
      }
    })
  }
}

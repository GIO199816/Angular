import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
 

  constructor(private proxy:ProxyService, private http:HttpClient) { }
  epnumb:string= ""
  episodecharacters:any[] = [];
  epcharacters:any[] = [];
  ngOnInit(): void {
  }
  onepisodsearch(){
    this.epcharacters = []
   this.proxy.getEpisod(this.epnumb).subscribe((response:any) => {
     this.episodecharacters = response.characters
     for(var i of this.episodecharacters){
       this.http.get(i).subscribe((obj:any)=>{
         this.epcharacters.push(obj)
         console.log(this.epcharacters)

       })
     }
   })

  }
}

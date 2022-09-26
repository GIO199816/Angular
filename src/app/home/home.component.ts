import { Component, OnInit } from '@angular/core';
import { filter } from '../filter.model';
import { FilterService } from '../filter.service';
import { ProxyService } from '../proxy.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private proxy: ProxyService, private filt:FilterService) { }
  chardata:any[]=[]
  karuselchardata:any[]=[]
  renderCharacters:any[]=[]

  ngOnInit(): void {
   this.proxy.getAllCharacters().subscribe((response:any) => {
     this.chardata = response
     var randindex = Math.floor(Math.random()*(response.length-3))
     this.karuselchardata = this.chardata.splice(randindex,3)
     console.log(this.karuselchardata)
     this.renderCharacters = this.chardata
     console.log(this.chardata)
   })

  }

  onFilterDataChange(event:filter){
    this.renderCharacters = this.filt.getFilterCharacters(this.chardata, event)
console.log(this.renderCharacters)
    }
}

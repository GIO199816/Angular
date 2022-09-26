import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from '../proxy.service';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  slidecharacter:any[]=[]
  alterego:any[]=[]
  constructor(private pronxy:ProxyService, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.pronxy.getAllCharacters().subscribe((response:any) => {
      this.activeroute.queryParams.subscribe((params:any) => {
        var name = params["name"]
        var status = params["status"]
        var ind = name.indexOf(" ")
        name = name.substring(0,ind)
        this.pronxy.getAllCharacterDataAlter(name,status).subscribe((response:any)=>{
          this.alterego = response
        })
      })
      var randindex = Math.floor(Math.random()*(response.length-3))
      this.slidecharacter = response.splice(randindex,3)
    })
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karusel',
  templateUrl: './karusel.component.html',
  styleUrls: ['./karusel.component.css']
})
export class KaruselComponent implements OnInit {
  
  constructor() { }
  @Input()
  characters:any=[]
  ngOnInit(): void {

  }

}

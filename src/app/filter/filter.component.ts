import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter } from '../filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  @Output()
  filterEmitter:EventEmitter<filter> = new EventEmitter();

  filt:filter = new filter();
  ngOnInit(): void {
  }

  onFilterDataChanged(){
    this.filterEmitter.emit(this.filt)
  }
}

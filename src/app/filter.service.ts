import { Injectable } from '@angular/core';
import { filter } from './filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  getFilterCharacters(characters:any[],filt:filter):any{
    if(filt.name.length == 0 && filt.gender == "all"){
          return characters
    }
    else if(filt.gender=="all"){
      return characters.filter(i=> i.name.toLowerCase().search(filt.name.toLowerCase())>=0)
    }
    else if(filt.name.length == 0 ){
      return characters.filter(i=> i.gender.toLowerCase() == filt.gender)
    }
    else{
      return characters.filter(i=> i.gender.toLowerCase()==filt.gender).filter(i=> i.name.toLowerCase().search(filt.name.toLowerCase())>=0)
    }

  }

}

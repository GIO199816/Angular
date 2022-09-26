import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  getAllCharacterData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  baseUrl:string = 'https://rickandmortyapi.com/api'
  getAllCharacters(){
    return this.http.get(this.baseUrl+"/character")
    .pipe(map((response:any) => {
      return response.results
    } ))

  }
 getAllCharacterDataAlter(name:string, status:string){
  var param = `${this.baseUrl}/character?name=${name}&status=${status}`
  return this.http.get(param).pipe(map((response:any) => {
    return response.results
  }))
 }
 getEpisod(epnum:string){
   return this.http.get(`https://rickandmortyapi.com/api/episode/${epnum}`)
  
 }
}

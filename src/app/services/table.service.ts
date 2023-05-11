import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Powerplant } from '../interfaces/powerplant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  public powerPlantData:string='./assets/data/powerplant.json'
  constructor(private HttpClientRef:HttpClient) { }

  public onPowerplantData():Observable<Powerplant[]>{
    return this.HttpClientRef.get<Powerplant[]>(this.powerPlantData)
   }
}


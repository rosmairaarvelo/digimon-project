import { Injectable } from '@angular/core';
import { digimon } from '../models/digimon-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DigimonServicesService {

urlAllDigimons: any;
urlIdDigimon: any;
urlNameDigimon: any;
urlLevelDigimon: any;

  constructor( private http: HttpClient ) { 
    this.urlAllDigimons = `${environment.api}/digimon`;
    this.urlIdDigimon = `${environment.api}/digimon/id/`;
    this.urlNameDigimon = `${environment.api}/digimon/name`;
    this.urlLevelDigimon = `${environment.api}/digimon/level`;
  }

  getAllDigimons() {
    return this.http.get<digimon>(`${this.urlAllDigimons}`).pipe(catchError(this._handError));
  }

  getDigimonId() {
    return this.http.get<digimon>(`${this.urlIdDigimon}`).pipe(catchError(this._handError));
  }

  getDigimonName() {
    return this.http.get<digimon>(`${this.urlNameDigimon}`).pipe(catchError(this._handError));
  }

  getDigimonLevel() {
    return this.http.get<digimon>(`${this.urlLevelDigimon}`).pipe(catchError(this._handError));
  }

  private _handError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error: ', error.error.message);
    } else{
      console.error(`Error general ${error.error}`);
    }

    return throwError('Error');
  }
}

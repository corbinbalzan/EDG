/* Add two methods. One will return the table columns, and one which will return the table row data. */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
/* I do not know why "of" does not work
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';*/
import { CHARACTERS } from './mock-data';
@Injectable({providedIn: 'root'})

export class GeneralInfoService {
  constructor() { }
getCharacters(): Observable<any[]>{

  return of(CHARACTERS);
  /*return Observable.of(CHARACTERS).delay(100);*/
}
getColumns(): string[]{
  return ["Name", "DOB", "Age", "Gender","Country_of_Origin","Language","Country_of_Residence", "Date_of_First_Contact"]};
}
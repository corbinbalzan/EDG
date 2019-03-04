/**import the General info service and initialize the columns and data in the ngOnInit() method*/
import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from '../general-info.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService: GeneralInfoService) { }

  ngOnInit() {

    this.columns = this.atService.getColumns(); 
    //["Name", "DOB", "Age", "Gender", ... ]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }

}

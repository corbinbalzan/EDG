/**import the General info service and initialize the columns and data in the ngOnInit() method*/
/*import { Component, OnInit } from '@angular/core';
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

}*/
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table.components',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["Name", "DOB", "Age", "Gender","Country_of_Origin","Language","Country_of_Residence", "Date_of_First_Contact"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Name: string;
  DOB : string;
  Age : string;
  Gender : string;
  Country_of_Origin : string;
  Language : string;
  Country_of_Residence : string;
  Date_of_First_Contact: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {Name: 'Fossati', DOB: 'What', Age: '20', Gender: 'Male', Country_of_Origin: 'Italy', Language: 'English', Country_of_Residence:'U.S.', Date_of_First_Contact: '2019'},
  {Name: 'Fisher', DOB: 'What', Age: '40', Gender: 'Male', Country_of_Origin: 'U.S.', Language: 'English', Country_of_Residence:'U.S.', Date_of_First_Contact: '2019'},
];

import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Person } from "../person.model";

@Component({
  selector: "table-basic-example",
  styleUrls: ["table.component.css"],
  templateUrl: "table.component.html"
})
export class TableComponent {
  people: Person[] = [];

  displayedColumns: string[] = [
    "position",
    "name",
    "dateBirth",
    "gender",
    "age",
    "language",
    "countryResidence",
    "firstContactDate",
    "countryOrigin"
  ];
  dataSource = new MatTableDataSource(this.people);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

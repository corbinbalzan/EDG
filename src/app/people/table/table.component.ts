import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Person } from "../person.model";
import { Subscription } from "rxjs";
import { PeopleService } from "../people.service";

@Component({
  selector: "table-basic-example",
  styleUrls: ["table.component.css"],
  templateUrl: "table.component.html"
})
export class TableComponent implements OnInit, OnDestroy {
  people: Person[] = [];
  private personSub: Subscription;
  public isLoading = false;
  

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

  constructor(public personService: PeopleService) {}

  ngOnInit() {
    this.isLoading = true;
    this.personService.getPeople();
    this.personSub = this.personService
      .getPeopleUpdateListener()
      .subscribe((people: Person[]) => {
        this.people = people;
        this.refresh();
        this.isLoading = false;
      });
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.people);
  }

  ngOnDestroy() {
    this.personSub.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(results){
    console.log(results);
  }
}

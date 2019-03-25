import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Person } from "../people/person.model";
import { Subscription } from "rxjs";
import { PeopleService } from "../people/people.service";

@Component({
  selector: "app-results-display",
  templateUrl: "./results-display.component.html",
  styleUrls: ["./results-display.component.css"]
})
export class ResultsDisplayComponent implements OnInit, OnDestroy {
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
}

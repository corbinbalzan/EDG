import { Person } from "./person.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class PeopleService {
  private people: Person[] = [];
  private peopleUpdated = new Subject<Person[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getPeople() {
    this.http
      .get<{ message: string; person: any }>("http://localhost:3000/api/people")
      .pipe(
        map(personData => {
          return personData.person.map(person => {
            return {
              name: person.name,
              dateBirth: person.dateBirth,
              age: person.age,
              gender: person.gender,
              countryOrigin: person.countryOrigin,
              language: person.language,
              countryResidence: person.countryResidence,
              firstContactDate: person.firstContactDate,
              id: person._id
            };
          });
        })
      )
      .subscribe(transformedPeople => {
        this.people = transformedPeople;
        this.peopleUpdated.next([...this.people]);
      });
  }

  getPeopleUpdateListener() {
    return this.peopleUpdated.asObservable();
  }

  getPerson(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      dateBirth: number;
      age: number;
      gender: string;
      countryOrigin: string;
      language: string;
      countryResidence: string;
      firstContactDate: string;
    }>("http://localhost:3000/api/people/" + id);
  }

  addPerson(
    name: string,
    dateBirth: number,
    age: number,
    gender: string,
    countryOrigin: string,
    language: string,
    countryResidence: string,
    firstContactDate: string
  ) {
    const person: Person = {
      id: null,
      name: name,
      dateBirth: dateBirth,
      age: age,
      gender: gender,
      countryOrigin: countryOrigin,
      language: language,
      countryResidence: countryResidence,
      firstContactDate: firstContactDate
    };
    this.http
      .post<{ message: string; personId: string }>(
        "http://localhost:3000/api/people",
        person
      )
      .subscribe(responseData => {
        const id = responseData.personId;
        person.id = id;
        this.people.push(person);
        this.peopleUpdated.next([...this.people]);
        this.router.navigate(["/"]);
      });
  }
}

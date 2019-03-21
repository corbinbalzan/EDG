import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Person } from "../person.model";
import { PeopleService } from "../people.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-person-create",
  templateUrl: "./person-create.component.html",
  styleUrls: ["./person-create.component.css"]
})
export class PersonCreateComponent implements OnInit {
  enteredName = "";
  enteredDateBirth = "";
  enteredAge = "";
  enteredGender = "";
  enteredCountryOrigin = "";
  enteredLanguage = "";
  enteredCountryResidence = "";
  enteredFirstContactDate = "";

  public person: Person;
  public isLoading = false;
  private mode = "createPerson";
  private personId: string;

  constructor(
    public personService: PeopleService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("personId")) {
        this.mode = "edit";
        this.personId = paramMap.get("personId");
        this.isLoading = true;
        this.personService.getPerson(this.personId).subscribe(personData => {
          this.isLoading = false;
          this.person = {
            id: personData._id,
            name: personData.name,
            dateBirth: personData.dateBirth,
            age: personData.age,
            gender: personData.gender,
            countryOrigin: personData.countryOrigin,
            language: personData.language,
            countryResidence: personData.countryResidence,
            firstContactDate: personData.firstContactDate
          };
        });
      } else {
        this.mode = "createPerson";
        this.personId = null;
      }
    });
  }

  onSavePerson(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "createPerson") {
      this.personService.addPerson(
        form.value.name,
        form.value.dateBirth,
        form.value.age,
        form.value.gender,
        form.value.countryOrigin,
        form.value.language,
        form.value.countryResidence,
        form.value.firstContactDate
      );
    }
    form.resetForm();
  }
}

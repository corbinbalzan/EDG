import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.css"]
})
export class SearchPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  counted: number[] = [1];
  current: number = 1;

  anotherSearch(): void {
    this.current++;
    this.counted.push(this.current);
  }
}

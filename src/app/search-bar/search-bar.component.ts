import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  @Output() another = new EventEmitter<boolean>();
  show: boolean = true;

  constructor() {}

  ngOnInit() {}

  unshow() {
    this.show = false;
    this.another.emit(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("page loaded!");
  }

  submitData(form : NgForm){
    console.log(form.value);
  }

}

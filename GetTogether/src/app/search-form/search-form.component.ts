import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output() searchClicked = new EventEmitter<string>();

  onClick(form: NgForm) {
    this.searchClicked.emit(form.value);
  }
}

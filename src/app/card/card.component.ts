import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from "../book";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() book: Book;
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.book.id);
  }
}

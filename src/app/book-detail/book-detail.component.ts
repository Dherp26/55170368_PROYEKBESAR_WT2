import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../book.service";
import { Book } from "../book";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"]
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.book = null;
    this.route.paramMap.subscribe(param => {
      this.book = this.bookService.getBook(+param.get("id"));
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Book } from "../book";
import { BookService } from "../book.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .subscribe(pokemons => (this.books = pokemons));
  }

  goToDetail(id: number) {
    this.router.navigate(["/book", id]);
  }
}

import { Injectable } from "@angular/core";
import { BOOK } from "./book.Data";
import { Observable, of } from "rxjs";
import { Book } from "./book";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private book: Array<Book> = BOOK;
  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(this.book);
  }

  getBook(id: number): Book {
    return this.book.find(book => (book.id == id));
  }
}

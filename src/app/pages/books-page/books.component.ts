import {Component, OnInit} from '@angular/core';
import {State, Store} from "@ngrx/store";
import { BooksPageActions} from '../books-page/actions'
import {FormControl, FormGroup} from "@angular/forms";
import {BookModel, BookRequiredProps} from "../../core/models/book-model/book.model";
import {Observable} from "rxjs";
import {selectActiveBook, selectAllBooks, selectBooksEarningTotals} from "../../shared/state";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books$: Observable<BookModel[]>
  public currentBook$: Observable<BookModel | undefined>
  public total$: Observable<number>;

  /*Form Group*/
  public bookForm = new FormGroup({
    title: new FormControl('')
  });

  // @ts-ignore
  constructor(private store: Store<State>) {
    this.books$ = store.select(selectAllBooks);
    this.currentBook$ = store.select(selectActiveBook)
    this.total$ = store.select(selectBooksEarningTotals)
  }

  ngOnInit(): void {
    /* Get all books */
    this.store.dispatch(BooksPageActions.enter());
  }

  /* Create Book */
  createBook(): void {
    this.store.dispatch(BooksPageActions.createBook({ book: this.bookForm.value }))
  }

  /* Update book */
  updateBook(book: BookModel): void {
    this.store.dispatch(BooksPageActions.updateBook({bookId: book._id, changes: book}));
  }

  /* Delete book */
  onDelete(book: BookModel): void {
    this.store.dispatch(BooksPageActions.deleteBook({ bookId: book._id }));
  }

  /* Clear selected book*/
  clearSelectedBook() {
    this.store.dispatch(BooksPageActions.clearSelectedBook());
  }


  /* Helpers */

  /* On select */
  onSelect(book: BookModel) {
    this.store.dispatch(BooksPageActions.selectBook({ bookId: book._id }));
  }

  /* On save */
  onSave(book: BookRequiredProps | BookModel) {
    if ("_id" in book) {
      this.updateBook(book);
    } else {
      this.createBook();
    }
  }

  /* On cancel */
  onCancel() {
    this.clearSelectedBook();
  }

}

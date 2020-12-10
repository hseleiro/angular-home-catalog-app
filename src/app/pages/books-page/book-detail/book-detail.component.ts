import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookModel} from "../../../core/models/book-model/book.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  originalBook: BookModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  bookForm = new FormGroup({
    title: new FormControl(""),
  });

  @Input() set book(book: BookModel) {
    this.bookForm.reset();
    this.originalBook = undefined;

    if (book) {
      this.bookForm.setValue({
        title: book.title
      })

      this.originalBook = book;
    }

  }

  onSubmit(book: BookModel) {
    this.save.emit({...this.originalBook, ...book})
  }

}

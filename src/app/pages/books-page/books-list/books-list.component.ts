import {Component, Input, Output, EventEmitter} from '@angular/core';
import {BookModel} from "../../../core/models/book-model/book.model";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent {
  @Input() books: BookModel[];
  @Input() readonly = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}

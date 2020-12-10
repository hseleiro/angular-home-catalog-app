import {createAction, props} from "@ngrx/store";
import {BookModel} from "../../../core/models/book-model/book.model";

export const booksLoadedSuccess = createAction(
    '[Books API] Books Loaded Success',
    props<{ books: BookModel[] }>()
)

export const booksLoadedFailure = createAction(
    '[Books API] Books Loaded Failure',
    props<{ books: BookModel[] }>()
)

export const bookCreated = createAction(
    '[Books API] Book Created Success',
    props<{ book: BookModel }>()
)

export const bookUpdated = createAction(
    '[Books API] Book Updated Success',
    props<{ book: BookModel }>()
)

export const bookDeleted = createAction(
    '[Books API] Book Deleted Success',
    props<{ bookId: string}>()
)

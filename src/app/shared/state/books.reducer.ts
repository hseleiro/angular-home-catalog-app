import {Action, createReducer, createSelector, on} from "@ngrx/store";
import {BooksApiActions, BooksPageActions} from "../../pages/books-page/actions";
import {BookModel, calculateBooksGrossEarnings} from "../../core/models/book-model/book.model";

const createBook = (books: BookModel[], book: BookModel) => [...books, book];
const updateBook = (books: BookModel[], changes: BookModel) =>
    books.map(book => {
        return book._id === changes._id ? Object.assign({}, book, changes) : book;
    });
const deleteBook = (books: BookModel[], bookId: string) =>
    books.filter(book => bookId !== book._id)

export interface State {
    collection: BookModel[];
    activeBookId: string | null
}

export const initialState: State = {
    collection: [],
    activeBookId: null
}

export const booksReducer = createReducer(
    initialState,
    on(
        BooksPageActions.enter,
        BooksPageActions.clearSelectedBook,
        (state, action) => {
        return {
            ...state,
            activeBookId: null
        };
    }),
    on(BooksPageActions.selectBook, (state, action) => {
        return {
            ...state,
            activeBookId: action.bookId
        }
    }),
    on(BooksApiActions.booksLoadedSuccess, (state, action) => {
        return {
            ...state,
            collection: action.books
        }
    }),
    on(BooksApiActions.bookDeleted, (state, action) => {
        return {
            ...state,
            collection: deleteBook(state.collection, action.bookId)
        }
    }),
    on(BooksApiActions.bookCreated, (state, action) => {
        return {
            ...state,
            collection: createBook(state.collection, action.book)
        }
    }),
    on(BooksApiActions.bookUpdated, (state, action) => {
        return {
            ...state,
            collection: updateBook(state.collection, action.book)
        }
    })
)

export function reducer(state: undefined | State, action: Action) {
    return booksReducer(state, action)
}

export const selectAll = (state: State) => state.collection;
export const selectActiveBookId = (state: State) => state.activeBookId;

export const selectActiveBook = createSelector(
    selectAll,
    selectActiveBookId,
    (books, activeBookId) => {
        return books.find(book => book._id === activeBookId);
    }
);

export const selectEarningTotals = createSelector(
    selectAll,
    calculateBooksGrossEarnings
);

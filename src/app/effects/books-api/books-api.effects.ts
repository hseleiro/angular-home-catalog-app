import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BooksServiceService} from "../../services/books-service/books-service.service";
import {BooksApiActions, BooksPageActions} from "../../pages/books-page/actions";
import {catchError, concatMap, exhaustMap, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class BooksApiEffects {
    constructor(private actions$: Actions, private booksService: BooksServiceService) {}

    getAllBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.enter),
            exhaustMap(() => {
                return this.booksService.getAllBooks().pipe(
                    map(books => BooksApiActions.booksLoadedSuccess({books})),
                    catchError(err => of({type: 'Books Loaded Failure'}))
                )
            })
        )
    })

    deleteBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.deleteBook),
            mergeMap(action => {
                return this.booksService.deleteBook(action.bookId).pipe(
                    map(() => BooksApiActions.bookDeleted({bookId: action.bookId}))
                )
            })
        )
    })

    createBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.createBook),
            concatMap(action => {
                return this.booksService
                    .createBook(action.book)
                    .pipe(map(book => BooksApiActions.bookCreated({ book })))
            })
        )
    })

    updateBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.updateBook),
            concatMap(action => {
                return this.booksService.updateBook(action.bookId, action.changes)
                    .pipe(
                        map(book => BooksApiActions.bookUpdated({ book }))
                    )
            })
        )
    })
}

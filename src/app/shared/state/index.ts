import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromBooks from "./books.reducer";

export interface State {
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer
}

export const metaReducers: MetaReducer<State>[] = []

/*
* Books State
* */

export const selectBookState = (state: State) => state.books;

export const selectActiveBook = createSelector(
    selectBookState,
    fromBooks.selectActiveBook
);
export const selectAllBooks = createSelector(
    selectBookState,
    fromBooks.selectAll
);
export const selectBooksEarningTotals = createSelector(
    selectBookState,
    fromBooks.selectEarningTotals
);

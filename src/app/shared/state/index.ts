import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromBooks from "./books.reducer";
import * as fromSignIn from "./sign-in.reducer"
import * as fromSignUp from "./sign-up.reducer"

export interface State {
    books: fromBooks.State;
    signIn: fromSignIn.State;
    signUp: fromSignUp.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer,
    signIn: fromSignIn.reducer,
    signUp: fromSignUp.reducer
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


import {UserModel} from "../../core/models/user-model/user.model";
import {SignInApiActions, SignInPageActions} from "../../pages/sign-in-page/actions";
import {Action, createReducer, on} from "@ngrx/store";

export interface State {
    collection: UserModel;
    email: string | null;
    password: string | null;
    userId: string | null;
}

export const initialState: State = {
    collection: null,
    email: null,
    password: null,
    userId: null
}

export const signInReducer = createReducer(
    initialState,
    on(
        SignInPageActions.enter,
        (state, action) => {
            return {
                ...state,
                email: null,
                password: null,
                userId: null,
            }
        }
    ),
    on(
        SignInPageActions.onUserSignIn,
        (state, action) => {
            return {
                ...state,
                email: action.user.email,
                password: action.user.password
            }
        }
    ),
    on(
        SignInApiActions.UserSignInSuccess,
        (state, action) => {
            return {
                ...state,
                email: action.user.email,
                password: action.user.password
            }
        }
    )
)

export function reducer(state: undefined | State, action: Action) {
    return signInReducer(state, action)
}

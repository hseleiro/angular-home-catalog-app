import {UserModel} from "../../core/models/user-model/user.model";
import {Action, createReducer, on} from "@ngrx/store";
import {SignUpApiActions, SignUpPageActions} from "../../pages/sign-up-page/actions";
import {signInReducer} from "./sign-in.reducer";

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

export const signUpReducer = createReducer(
    initialState,
    on(
        SignUpPageActions.enter,
        (state, action) => {
            return {
                ...state,
                email: null,
                password: null,
                userId: null
            }
        }
    ),
    on(
        SignUpPageActions.onUserSignUp,
        (state, action) => {
            return {
                ...state,
                email: action.user.email,
                password: action.user.password
            }
        }
    ),
    on(
        SignUpApiActions.userSignUpSuccess,
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
    return signUpReducer(state, action)
}

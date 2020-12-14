import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../../core/models/user-model/user.model";

export const enter = createAction('[SignIn Page] Enter')

export const onUserSignIn = createAction(
    '[Sign In Page] User SignIn',
    props<{ user: UserModel}>()
)

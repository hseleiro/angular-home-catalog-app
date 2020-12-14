import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../../core/models/user-model/user.model";

export const UserSignInSuccess = createAction(
    '[SignIn API] User SignIn Success',
    props<{user: UserModel}>()
)

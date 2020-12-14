import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../../core/models/user-model/user.model";

export const userSignUpSuccess = createAction(
    '[SignUp API] User SignUp Success',
    props<{user: UserModel}>()
)

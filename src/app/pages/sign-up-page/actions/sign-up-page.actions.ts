import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../../core/models/user-model/user.model";

export const enter = createAction('[SignUp Page] Enter');

export const onUserSignUp = createAction(
    '[SignUp Page] User SignUp',
    props<{user: UserModel}>()
)

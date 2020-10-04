import {Observable} from "rxjs";

export class UserModel {
    userProfile: {
        hasProfile: Observable<boolean>;
        isAdmin: Observable<boolean>;
    }
}

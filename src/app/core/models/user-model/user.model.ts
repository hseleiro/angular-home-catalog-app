import {Observable} from "rxjs";

export class UserModel {
    name: string;
    email: string;
    userProfile: {
        hasProfile: Observable<boolean>;
        isAdmin: Observable<boolean>;
    }
}

import {Observable} from "rxjs";

export class User {
    name: string;
    email: string;
    userProfile: {
        hasProfile: Observable<boolean>;
        isAdmin: Observable<boolean>;
    }
}

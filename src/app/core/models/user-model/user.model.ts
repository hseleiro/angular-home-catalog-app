export interface UserModel {
    _id: string;
    name: string;
    email: string;
    password: string;
    notification: string;
}

export type UserRequiredProps = Pick<UserModel, "name" | "_id" | "email" | "password">

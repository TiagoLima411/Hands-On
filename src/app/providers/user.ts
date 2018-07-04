export interface User {
    uid: string;
    email: string;
    displayName: String;
    photoURL: String;
    roles: Roles;
}
export interface Roles {
    subscribe?: boolean;
    admin?: boolean;
}

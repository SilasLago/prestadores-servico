export class AuthData {

    constructor(
        private token: string | null,
        private userId: number | null,
        public authenticate: (token: string, userId: number) => void,
        public deauthenticate: () => void
    ) {}

    isAuthenticated(): boolean {
        return this.token !== null && this.userId !== null;
    }

}
import auth0 from "auth0-js";

export default class Auth {
    constructor(history) {
        this.history = history;

        this.auth0 = new auth0.WebAuth({
            domain: 'photoeffectsapp.auth0.com',
            clientID: 'pHRE8X0Y5vSytjkESoSTKD2oyv71pEUI',
            redirectURL: 'http://localhost:3000/callback',
            responseType: "token id_token",
            scope: "openid profile email"
        });
    }

    login = () => {
        this.auth0.authorize();
    };

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.push("/");
            } else if (err) {
                this.history.push("/");
                alert(`Error: ${err.error}. Check the console for further details.`);
                console.log(err);
            }
        });
    };

    setSession = authResult => {
        //set the time that the access token will expire
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())

        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", expiresAt);
    }
}
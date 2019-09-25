import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

export default class Auth {
    constructor(history) {
        this.history = history;

        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
            responseType: "token id_token",
            scope: "openid profile email"
        });
    }

    getProfile = () => {
        if(localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"))
        }
        else {
            return {};
        }
    }

    login = () => {
        this.auth0.authorize();
    };

    logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.history.push("/");
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.history.push("/dashboard");
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
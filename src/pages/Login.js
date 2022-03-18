import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';

function Login() {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {

        })
    };

    return (
        <div className="LoginPage">
            <p>Sign In with Google to continue</p>
            <button className="login-with-google-btn">Sign In with Google</button>
        </div>
    );
}

export default Login;
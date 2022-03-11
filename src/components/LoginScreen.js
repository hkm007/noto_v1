import React from "react";
import google_icon from "../assets/google_icon.png";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

function LoginScreen() {
  const handleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  return (
    <div className="mx-2">
      <div className="login-card col-lg-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <center>
              <h1 className="display-4">
                Welcome to <strong>Noto</strong>
              </h1>
              <i className="login-info">Store and manage your notes efficiently.</i>
              <br />
              <button
                type="button"
                className="btn btn-outline-secondary my-3"
                onClick={handleLogin}
              >
                <img
                  src={google_icon}
                  alt="google"
                  style={{ height: "35px", width: "35px" }}
                />{" "}
                Login with Google
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

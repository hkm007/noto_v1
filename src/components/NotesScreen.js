import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { getAuth, signOut } from "firebase/auth"

function NotesScreen({setIsLoggedIn}) {
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);

  const addNotes = (e) => {
    e.preventDefault();
    console.log(text);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
    .then(res => {
      setIsLoggedIn(false);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser.displayName.substring(0, auth.currentUser.displayName.indexOf(' ')));
  }, [setIsLoggedIn])

  return (
    <div className="notes-card col-lg-10 mx-auto my-5">
      <div className="card">
        <div className="card-body">
          <div className="user-info">
            <h1>@<i>{user} </i><button type="button" class="btn btn-outline-dark" onClick={logout}>Logout</button></h1>
          </div>
          <hr />
          <form onSubmit={(e) => addNotes(e)}>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Add a Note
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-secondary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <hr />

          <div className="row m-1">
                <Notes />
                <Notes />
                <Notes />
                <Notes />
            </div>
        </div>
      </div>
    </div>
  );
}

export default NotesScreen;

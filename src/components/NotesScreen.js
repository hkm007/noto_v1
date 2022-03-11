import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import { getAuth, signOut } from "firebase/auth";
import { set, ref, getDatabase, onValue, remove } from "firebase/database";
import { getApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

function NotesScreen({ setIsLoggedIn }) {
  const [text, setText] = useState("");
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const db = getDatabase(
    getApp(),
    "${{ secrets.DBURL }}"
  );

  useEffect(() => {
    const auth = getAuth();
    setUser(
      auth.currentUser.displayName.substring(
        0,
        auth.currentUser.displayName.indexOf(" ")
      )
    );

    onValue(ref(db, `/notes/${getAuth().currentUser.uid}`), (snapshot) => {
      setNotes([]);
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((note) =>
          setNotes((oldArray) => [...oldArray, note])
        );
      }
    });
  }, [db]);

  // function to logout user
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function to add a new note
  const addNotes = (e) => {
    e.preventDefault();

    var notesId = uuidv4();
    set(ref(db, `notes/${getAuth().currentUser.uid}/${notesId}`), {
      text,
      date: Date.now(),
      _id: notesId,
    });

    setText("");
  };

  // function to delete a note
  const deleteNote = (notesId) => {
    remove(ref(db, `/notes/${getAuth().currentUser.uid}/${notesId}`));
  };

  return (
    <div className="mx-2">
      <div className="notes-card col-lg-10 mx-auto my-5">
        <div className="card">
          <div className="card-body">
            <div className="user-info">
              <i className="username">@{user} </i><i className="bi bi-box-arrow-right" onClick={logout}></i>
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
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-secondary" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <hr />

            <div className="row m-1">
              {notes.length ? (
                notes.map((note) => {
                  return (
                    <Notes key={note._id} note={note} deleteNote={deleteNote} />
                  );
                })
              ) : (
                <center>
                  <i>You don't have any notes yet! Add few here.</i>
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesScreen;

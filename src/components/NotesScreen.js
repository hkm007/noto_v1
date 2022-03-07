import React, { useState } from "react";
import Notes from "./Notes";

function NotesScreen() {
  const [text, setText] = useState("");

  const addNotes = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="notes-card col-lg-10 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <h1>Hola @<i>Himanshu</i></h1>
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

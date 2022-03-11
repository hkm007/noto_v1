import React from "react";

function Notes({note, deleteNote}) {
  return (
    <div className="col-lg-4 p-1">
      <div className="card">
        <div className="card-body">
          <pre>{note.text}</pre>
          <hr />
          <div className="note-card-footer">
            <div className="col-lg-11"><i>{new Date(note.date).toDateString()}</i></div>
            <div className="col-lg-1"><b className="delete-note-button" onClick={() => deleteNote(note._id)}>X</b></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;

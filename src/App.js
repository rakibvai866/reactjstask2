import { useState } from "react";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [updateNote, setUpdateNote] = useState(null);

  const createHandler = (event) => {
    event.preventDefault();
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    if (noteTitle) {
      setNotes([...notes, newNote]);
      setNoteTitle("");
    } else {
      alert("Please enter a note");
    }
  };

  const deleteHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (editNote) => {
    setEditMode(true);
    const newEditNote = notes.find((note) => note.id === editNote.id);
    setNoteTitle(newEditNote.title);
    setUpdateNote(editNote);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const newNotes = notes.map((note) => {
      if (note.id === updateNote.id) {
        return {
          ...note,
          title: noteTitle,
        };
      }
      return note;
    });

    setNotes(newNotes);
    setNoteTitle("");
    setEditMode(false);
  };

  return (
    <div className="App">
      <form onSubmit={editMode ? updateHandler : createHandler}>
        <input
          type="text"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">{editMode ? "Update" : "Add Note"}</button>
      </form>

      <ul className="lists">
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button type="button" onClick={() => editHandler(note)}>
              Edit
            </button>
            <button type="button" onClick={() => deleteHandler(note.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

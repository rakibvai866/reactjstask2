import { useState } from "react";
import "./App.css";
// import BioData from "./components/BioData";

// class 1
// function App() {
// return (
// <div className="App">
//   <BioData
//     name="Jayesh"
//     age="25"
//     gender="Male"
//     address="Pune"
//     email="cf@gmail.com"
//     phone="12025435"
//     religion="Islam"
//     nationality="Bangladesi"
//     skills={["HTML", "CSS", "JS", "React", "NodeJS"]}
//     interests={["Reading", "Writing", "Travelling"]}
//   />

//   <BioData
//     name="Asif"
//     age="23"
//     gender="Male"
//     address="Pune"
//     email="df@gmail.com"
//     religion="Islam"
//     nationality="Indian"
//     skills={["HTML", "CSS", "JS", "React"]}
//     interests={["Reading", "Writing"]}
//   />

//   <BioData
//     name="Sachin"
//     age="25"
//     gender="Male"
//     address="Pune"
//     email="gf@gmail.com"
//     phone="12025435"
//     religion="Islam"
//     nationality="Indian"
//     skills={["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB", "ExpressJS", "React Native"]}
//     interests={["Reading", "Writing", "Travelling", "Music", "Dancing", "Cooking", "Singing", "Gaming"]}/>
// </div>
// );
// }

// class 2
// function App() {
//   const [count, setCount] = useState(200);
//   const incrementHandler = (payload) => {
//     setCount(count + payload);
//   };

//   const decrementHandler = (payload) => {
//     setCount(count - payload);
//   };

//   return (
//     <div className="App">
//       <h1>Your counter value is : {count} </h1>
//       <button onClick={() => incrementHandler(1)}>Increment</button>
//       <button onClick={() => decrementHandler(2)}>Decrement</button>
//     </div>
//   );
// }

// class 3
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

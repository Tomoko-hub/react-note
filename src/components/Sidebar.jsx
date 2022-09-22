import React from 'react';
import "./Main.css";

const Sidebar = ({onAddNote, notes, onDeleteNote}) => {
  return (
    <div className='app-sidebar'>
        <div className="app-sidebar-header">
            <h1>Note</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (
                <div className="app-sidebar-note" key={note.id}>
                    <div className="sidebar-noteTitle">
                        <strong>{note.title}</strong>
                        <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <div className="colorBoxContainer">
                        <form clasName="choseColor" action="/action_page.php">
                            <label htmlFor="favcolor">Select your favorite color:{note.color}</label>
                            <input type="color" id="favcolor" name="favcolor" value="#0b6623" />
                        </form>
                    </div>
                    <p>{note.content}</p>
                    <small>{new Date(note.modDate).toLocaleDateString("fi-FI", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}</small>
                </div>
            ))}

            
        </div>
    </div>
  )
}

export default Sidebar

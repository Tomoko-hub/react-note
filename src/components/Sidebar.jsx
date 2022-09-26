import React from 'react';
import "./Main.css";

const Sidebar = ({
    onAddNote, 
    notes, 
    onDeleteNote, 
    activeNote, 
    setActiveNote
    }) => {

    const sortedNotes = notes.sort((a,b) => b.modDate - a.modDate);

  return (
    <div className='app-sidebar'>
        <div className="app-sidebar-header">
            <h1>Note</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {sortedNotes.map((note) => (
                <div 
                    className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                    key={note.id}
                    onClick={()=>setActiveNote(note.id)}
                >
                    <div className="sidebar-noteTitle">
                        <strong>{note.title}</strong>
                        <button 
                            onClick={()=>onDeleteNote(note.id)}
                        >
                        Delete
                        </button>
                    </div>
                    {/*
                    <div className="colorBoxContainer">
                        <form className="choseColor" action="/action_page.php">
                            <label htmlFor="favcolor">Select your favorite color:{note.color}</label>
                            <input type="color" id="favcolor" name="favcolor" value="#0b6623" />
                        </form>
                    </div>
                    */}
                    {note.content}
                    <div>
                        <small>{new Date(note.modDate).toLocaleDateString("fi-FI", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}</small>
                    </div>
                </div>
            ))}

            
        </div>
    </div>
  )
}

export default Sidebar

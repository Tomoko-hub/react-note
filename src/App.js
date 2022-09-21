import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {

  const [ notes, setNotes ] = useState([]);

  const onAddNote =()=> {
    console.log("clicked");
    const newNote = {
      id: 1,
      title: "this is the title of note. topics yeah!",
      content: "this is the content of note. here iwe go.",
      color: "green",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;

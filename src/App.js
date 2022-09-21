import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from "react-uuid";

function App() {

  const [ notes, setNotes ] = useState([]);

  const onAddNote =()=> {
    console.log("clicked");
    const newNote = {
      id: uuid(),
      title: "This is the title of note. Topics yeah!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat, eligendi dolore adipisci ratione voluptatibus sint blanditiis? Consectetur fugiat vitae, sunt dolorem corrupti assumenda nihil hic? Quibusdam aliquid voluptatibus sunt blanditiis, veniam quidem laudantium molestiae nemo fugit natus voluptatem rem officiis quam doloribus obcaecati doloremque.",
      color: "green",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;

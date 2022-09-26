import React from 'react'
import "./Sidebar.css"
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Main = ({activeNote, onUpdateNote}) => {

  const onEditNote = (key, value) => {
    onUpdateNote ({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <div className='chooseNote'>Chose a note.</div>
  }


  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input 
          id="title"
          type="text" 
          placeholder='Give me a name.' 
          value={activeNote.title}
          onChange={(event)=> {onEditNote("title", event.target.value)}}
         />
        <textarea 
          placeholder="Create your note." 
          id="content" 
          value={activeNote.content}
          onChange={(event)=> {onEditNote("content", event.target.value)}}
         >
        </textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Main
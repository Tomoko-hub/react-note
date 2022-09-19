import React from 'react';
import "./Main.css";

const Sidebar = () => {
  return (
    <div className='app-sidebar'>
        <div className="app-sidebar-header">
            <h1>Note</h1>
            <button>Add</button>
        </div>
        <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                <div className="sidebar-notetitle">
                    <strong>Title</strong>
                    <button>Delete</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat, eligendi dolore adipisci ratione voluptatibus sint blanditiis? Consectetur fugiat vitae, sunt dolorem corrupti assumenda nihil hic? Quibusdam aliquid voluptatibus sunt blanditiis, veniam quidem laudantium molestiae nemo fugit natus voluptatem rem officiis quam doloribus obcaecati doloremque.</p>
                <small>Last edited:dd/mm/yy</small>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

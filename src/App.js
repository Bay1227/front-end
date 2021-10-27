import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=> 
    fetch('http://localhost:3000/notes')
    .then((res) => res.json())
    .then((json) => setNotes(json)),
    []
  );


  return (
    <div className="App">
      <header className="App-header">
        <ul> 
          {notes.map((note) => ( 
          <li key={note.name}>{note.name}</li>
          ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;

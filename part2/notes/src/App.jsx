import { useState } from 'react'
import Note from './components/Note'



const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("") 
  const [showAll, setShowAll] = useState(true)//whether we show em all

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)// Technically can remove the "=== true" here since its either true or false
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {//Create note object with all the elements like in the "main" format
      content: newNote,
      important: Math.random() < 0.5,//50/50 chance of being important
      id: String(notes.length + 1),//Simple
    }
    setNotes(notes.concat(noteObject))// concatenate the old notes and the new ones, reset the "newnote" to blank
    setNewNote('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (//for button, we set the opposite of it's current value, very simple, the text switches from important to all depending on that value
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> 
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App

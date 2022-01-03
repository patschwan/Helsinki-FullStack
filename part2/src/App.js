import React from 'react'
import Note from './components/Notes'

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          // key Attribute Definition not longer in li Element
          // Define key Element in Componente
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
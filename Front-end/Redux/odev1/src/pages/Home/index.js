import React from 'react'
import AddNote from '../../components/AddNote.js';
import ListNotes from '../../components/ListNotes';

function Home() {
  return (
    <div className='container'>
   <AddNote />
   <ListNotes />
    </div>
  )
}

export default Home
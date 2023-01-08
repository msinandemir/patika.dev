import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNotes } from '../../../../redux/note/noteSlice'

function ListItem({item}) {
 const dispatch = useDispatch()
    
  return (
    <div className='listItem' style={{backgroundColor:`${item.color}`}}>
      <button onClick={() => dispatch(deleteNotes({item}))} className='btn-close'>X</button>
        <h4>{item.title}</h4>
    <p>{item.content}</p>
    </div>
  )
}

export default ListItem
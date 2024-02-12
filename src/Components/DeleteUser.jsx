import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../Store/Slices/UserSlice'


const DeleteUser = () => {
  const dispatch=useDispatch()


  const deleteAll=()=>{
    dispatch(deleteUsers())
  }

  return (
    <div>
      <button onClick={deleteAll}>Delete all User</button>
    </div>
  )
}

export default DeleteUser
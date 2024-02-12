import React from 'react'
import DeleteUser from './DeleteUser'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'

import { addUser } from '../Store/Slices/UserSlice'

import DisplayUser from './DisplayUser'




const UserDetail = () => {
  const dispatch=useDispatch()


  const addNewUser=(payload)=>{
    dispatch(addUser(payload))
  }


  return (
    <div>
        <button onClick={()=>addNewUser(fakeUserData())}>Add new User</button>
        <ul>
        <DisplayUser/>
        </ul>
        <DeleteUser/>
    </div>
  )
}

export default UserDetail
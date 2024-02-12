import React from 'react'
//used for secting the dta from the store
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { removeUser } from '../Store/Slices/UserSlice'
import { useDispatch } from 'react-redux'

const DisplayUser = () => {
    const dispatch=useDispatch()

    const data=useSelector((state)=>state.users)


    const  deleteUser=(id)=>{
      dispatch(removeUser(id))
    }


  return (
    <div>
        {
            data.map((e,id)=>(
                <li key={id}>{e}<button onClick={()=>deleteUser(id)}>Delete</button> </li>
                
            ))
        }
    </div>
  )
}

export default DisplayUser
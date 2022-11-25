import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { searchCharacter } from "../redux/charactersSlice"

function Search() {

    const dispatch = useDispatch()
    const search = useSelector(state => state.characters.search)


  return (
    <input className='rounded-2xl ml-2 py-1 px-4 bg-zinc-900 text-amber-200 focus:outline-none text- ' type="text" placeholder="Search for characters" value={search} onChange={(e)=> dispatch(searchCharacter(e.target.value))}/>

  )
}

export default Search
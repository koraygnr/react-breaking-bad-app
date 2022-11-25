import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='flex justify-center items-center fixed h-14 w-full bg-amber-200 shadow-xl z-10 text-zinc-900'>
        <nav>
            <ul className='flex gap-4'>
                <li>
                    <NavLink to="/">Characters</NavLink>
                </li>
                <li>
                    <NavLink to="quotes">Quotes</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
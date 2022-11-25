import React from 'react'
import { NavLink } from "react-router-dom"
import Search from './Search'

function Navbar() {
    return (
        <div className='flex w-full items-center justify-center mx-auto fixed h-14 bg-amber-200 shadow-xl z-10 text-zinc-900'>
                <nav className='flex flex-row justify-between gap-16'>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <NavLink to="/">Characters</NavLink>
                        </li>
                        <li>
                            <NavLink to="quotes">Quotes</NavLink>
                        </li>
                    </ul>
                <Search />
                </nav>
        </div>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Card( {item: {char_id, name, img}}) {
    return (
      <Link to={`character/${char_id}`}>
    <div className="max-h-full rounded-lg shadow-md bg-zinc-800 dark:border-gray-700 transition-all opacity-80 hover:opacity-100">
        <div className="h-[260px] lg:h-[300px] xl:h-[360px] overflow-hidden p-2 " >
        <img className="object-cover rounded-lg"  src={img} alt={name} />
        </div>
        <div className="max-h-60 text-center py-2 text-amber-200 font-medium">{name}</div>
    </div>
        </Link>
  )
}

export default Card
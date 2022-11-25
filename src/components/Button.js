import React from 'react'

function Button({name, onClick}) {
  return (
    <button onClick={onClick} type="button" className="text-black bg-amber-200 hover:bg-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">{name}</button>
  )
}

export default Button
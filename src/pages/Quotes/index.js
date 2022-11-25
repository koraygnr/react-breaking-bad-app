import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchAllQuotes } from "../../redux/quotesSlice"
import Loading from "../../components/Loading"

function Quotes() {

  const dispatch = useDispatch()
  const items = useSelector(state => state.quotes.items)
  const status = useSelector(state => state.quotes.status)
  const error = useSelector(state => state.quotes.error)

  useEffect( ()=> {
    if(status === "idle") {
      dispatch(fetchAllQuotes())
    }
  },[dispatch, status])

  if(status === "loading") {
    return <Loading />
  }

  if(error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='container text-center mx-auto pt-20'>
      <ul>
        {
          items.map(item => (
            <li key={item.quote_id} className='py-2 transition-all duration-300 hover:scale-105'>
              {item.quote} - <span className='font-bold'>{item.author}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Quotes
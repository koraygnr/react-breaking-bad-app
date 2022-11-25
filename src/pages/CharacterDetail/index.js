import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import Loading from '../../components/Loading'
import Button from '../../components/Button'

function CharacterDetail() {

  const navigate = useNavigate()
  const [char, setChar] = useState(null)
  const [loading, setLoading] = useState(true)
  const { charId } = useParams()


  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${charId}`)
      .then(res => res.data)
      .then(data => setChar(data[0]))
      .finally(() => setLoading(false))
  }, [charId])

  if( loading ) {
    return <Loading />
  }

  return (
    <>
      <h1 className='pt-20 text-center text-2xl font-medium'>Character Details</h1>
      {
        char && (
          <div className='container mx-auto py-8'>
            <div className='flex flex-row  justify-center items-center gap-6'>
              <div>
                <img src={char.img} alt={char.name} className="max-w-lg"/>
              </div>
              <div>
                <h3 className='text-xl font-bold'>Name:</h3>
                <p className=''>{char.name}</p>
                <h3 className='text-xl font-bold mt-4'>Nickname:</h3>
                <p className=''>{char.nickname}</p>
                <h3 className='text-xl font-bold mt-4'>Birthday:</h3>
                <p className=''>{char.birthday}</p>
                <h3 className='text-xl font-bold mt-4'>Occupation:</h3>
                <ul>
                  {
                    char.occupation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  }
                </ul>
                <h3 className='text-xl font-bold mt-4'>Status:</h3>
                <p className=''>{char.status}</p>
                <div className='mt-4'>
                <Button name="Go Back" onClick={()=> navigate(-1)} />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CharacterDetail
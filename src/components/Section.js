import React, { useEffect } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from "react-redux"
import { fetchCharacters } from "../redux/charactersSlice"
import { fetchAllCharacters } from "../redux/charactersSlice"
import Loading from './Loading'
import Button from './Button'


function Section() {

    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.items)
    const allCharacters = useSelector(state => state.characters.allItems)
    const status = useSelector(state => state.characters.status)
    const error = useSelector(state => state.characters.error)
    const nextPage = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)
    const search = useSelector(state => state.characters.search)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])

    useEffect( () => {
            dispatch(fetchAllCharacters())
    },[dispatch])

    if (status === "failed") {
        return <div>Error: {error}</div>
    }

    let filtered

    if( search ) {
        filtered  = allCharacters.filter(item => (
            item.name.toLowerCase().includes(search.toLowerCase())
        ))
    } else {
        filtered = characters
    }


    return (
        <>
            <div className="container mx-auto grid-flow-row grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-20">
                {
                    filtered.map(item => (
                        <Card item={item} key={item.char_id} />
                    ))
                }
            </div>
            <div className='container h-24 w-full mx-auto flex justify-center items-center'>
                {status === "loading" && <Loading />}
                {status === "succeeded" && hasNextPage && !search && <Button name={`Load more (${nextPage})`} onClick={() => dispatch(fetchCharacters(nextPage))} />}
                {!hasNextPage && <div>There is nothing to be shown.</div>}
            </div>
        </>
    )
}

export default Section


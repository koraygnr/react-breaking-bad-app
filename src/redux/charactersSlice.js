import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const char_limit = 15;

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page*char_limit}`)
    return res.data
    
})
export const fetchAllCharacters = createAsyncThunk("characters/getAllCharacters", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`)
    return res.data
    
})

export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        allItems: [],
        status: "idle",
        error: "",
        page: 0,
        search: "",
        hasNextPage: true
    },
    reducers: {
        searchCharacter: (state, action) => {
            state.search = action.payload
        }
    },
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.status = "succeeded"
            state.page += 1

            if(action.payload.length < 15){
                state.hasNextPage = false
            }
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        },
        [fetchAllCharacters.fulfilled]: (state, action) => {
            state.allItems = action.payload
        }
    }
})

export const { searchCharacter } = charactersSlice.actions
export default charactersSlice.reducer
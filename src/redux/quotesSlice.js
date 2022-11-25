import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchAllQuotes = createAsyncThunk("quotes/getAllQuotes", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)
    return res.data
})

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        items: [],
        status: "idle",
        error: ""
    },
    reducers: {},
    extraReducers: {
        [fetchAllQuotes.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchAllQuotes.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "succeeded"
        },
        [fetchAllQuotes.rejected]: (state, action) => {
            state.error = action.error.message
            state.status = "failed"
        }
    }
})

export default quotesSlice.reducer
import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload    
    })
  },
})

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async function(category) {
    const url = category ? 
    `https://fakestoreapi.com/products/category/${category}` :
    `https://fakestoreapi.com/products`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()

    return result
  }
)

export const { changeSearch } = productsSlice.actions

export default productsSlice.reducer
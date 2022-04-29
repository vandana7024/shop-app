import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopServices from "../../services/shopServices";
const initialState = {
  shops: [],
};

export const createShop = createAsyncThunk("shops/create", async (data) => {
  const res = await shopServices.create({
    ...data,
  });
  return res.data;
});
export const retriveShops = createAsyncThunk("shops/retrieve", async () => {
  const res = await shopServices.getAll();
  return res.data;
});
export const updateShop = createAsyncThunk("shops/update", async (data) => {
  const res = await shopServices.update(data);
  return res.data;
});
export const deleteShop = createAsyncThunk("shops/delete", async (id) => {
  await shopServices.delete(id);
  return id;
});
export const deleteAllShops = createAsyncThunk("shops/deleteAll", async () => {
  const res = await shopServices.deleteAll();
  return res.data;
});
export const findTutorialsByTitle = createAsyncThunk(
  "shops/findByTitle",
  async ({ title }) => {
    const res = await shopServices.findByTitle(title);
    return res.data;
  }
);
const shopSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: {
    [retriveShops.fulfilled]: (state, action) => {
      state.shops = action.payload;
    },
    [createShop.fulfilled]: (state, action) => {
      state.shops.push(action.payload);
    },
    [updateShop.fulfilled]: (state, action) => {
      const index = state.shops.findIndex(
        (shop) => shop.id === action.payload.id
      );
      state.shops[index] = action.payload;
    },

    [deleteShop.fulfilled]: (state, action) => {
      let index = state.shops.findIndex((id) => id === action.payload.id);
      state.shops.splice(index, 1);
    },
    [deleteAllShops.fulfilled]: (state, action) => {
      return [];
    },
    // [findTutorialsByTitle.fulfilled]: (state, action) => {
    //   return [...action.payload];
    // },
  },
});
const { reducer } = shopSlice;
export default reducer;

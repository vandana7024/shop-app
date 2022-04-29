import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../slice/shopslice";
const reducer = {
  shop: shopSlice,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;

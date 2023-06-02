import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reduceers: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware,
  devTools: true
});

export default store;

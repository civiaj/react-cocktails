import { configureStore } from '@reduxjs/toolkit';
import { cocktailsApi } from './cocktailsApi';

export const store = configureStore({
  reducer: {
    [cocktailsApi.reducerPath]: cocktailsApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(cocktailsApi.middleware),
});

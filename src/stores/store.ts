// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice'; // Ejemplo: Slice para el modo oscuro

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
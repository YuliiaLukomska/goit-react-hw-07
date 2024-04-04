import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// створюємо конфігурацію для збереження поля 'items'зі слайсу контактів.
const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
  //   blacklist: [], -тут навпаки можна вказати ті властивості, які не повинні синхронізуватись з ЛС
};

/* у властивості reducer буде весь state нашого додатку. І в цього стейта буде дві властивості: contacts і filters. 
Використовуємо persistReducer щоб застосувати конфігурацію до редюсера слайса контактів contactsReducer.*/
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Використовуємо persistStore для створення persistor для PersistGate який викор. в main.js
export const persistor = persistStore(store);

export default store;

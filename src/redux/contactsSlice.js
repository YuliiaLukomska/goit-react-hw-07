/* слайсер генерує екшн-кріейтори та редюсер одночасно (типу може одночасно і команди 
згенеруватии і цехи, які ці команди будуть виконувати)*/

import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts } from "./contactsOps";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};
// в reducers ми можемо писати мутабельний код, бо він все одно буде оброблений Immer.js, який в результаті зробить цей код іммутабельним.
const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів. Виконують логіку зміни стану, приймають state, це поточне значення стану та action - це об'єкт-інструкція, який повертає action-creator
  // reducers: {
  //   addContact(state, action) {
  //     //   push це мутабельна зміна масиву, тому ретьорн нетреба
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     // filter це іммутабельний метод, він немутує масив, а просто створює новий масив. Тому цей новий масив треба присвоїти.
  //     state.items = state.items.filter((item) => item.id !== action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

/* Генератори action-creators. Тут ми витягуємо функції, які згенерують команду. Саме вони будуть тригерити наші редюсери. 
Під капотом тут приховані функції: Н-д функція deleteContact це:

const deteleContactActionCreator = (payload) => {
   return {
   type: 'contacts/deleteContacts',
   payload: payload,
   };

}; 
Цю всю логіку приховує Redux Toolkit в слайсері. Назви редюсерів мають співпадати з назвати витягнутих функцій екшн-кріейторів*/
// зі слайсу витягуємо екшн-кріейтори і будемо їх викор в dispatch.
export const { deleteContact } = contactsSlice.actions;

// Редюсер слайсу. Зі слайсу витягуємо редюсер, який ми використовуємо в store.js і який буде повертати поточний стан
export const contactsReducer = contactsSlice.reducer;
// створюємо функцію для отримання масиву items зі стану для подальшого використання цієї ф-ї як колбек ф-ї useSelector() - з метою отримання даних стейту в будь-якій частині додатку
export const selectContacts = (state) => state.contacts.items;

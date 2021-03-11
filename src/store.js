import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // 이렇게 사용할 경우 state를 mutate 하거나 리턴 둘 다 가능
// // 기존 redux는 state를 mutate X
// const reducer = createReducer( localStorage.getItem('toDos')? JSON.parse(localStorage.getItem('toDos')) : [], {
//   [addToDo] : (state, action) => {
//     state.push({ id:Date.now(), text:action.payload })
//     localStorage.setItem("toDos", JSON.stringify(state));
//   } ,
//   [deleteToDo] : (state, action) => {
//     const newToDos = state.filter(toDo => toDo.id !== action.payload);
//     localStorage.setItem("toDos", JSON.stringify(newToDos));
//     return newToDos;
//   } 
// })

const toDos = createSlice({
  name: 'toDosReducer',
  initialState : localStorage.getItem('toDos')? JSON.parse(localStorage.getItem('toDos')) : [],
  reducers : {
    add : (state, action) => {
      state.push({ id:Date.now(), text:action.payload })
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    remove: (state, action) => {
      const newToDos = state.filter(toDo => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(newToDos));
      return newToDos;
    }
  }
})

const store = configureStore({ reducer : toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
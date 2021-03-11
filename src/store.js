import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";


const addToDo = text => {
  return {
    type: ADD,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state = localStorage.getItem('toDos')? JSON.parse(localStorage.getItem('toDos')) : [], action) => {
  switch(action.type) {
    case ADD:
      const newToDos = [{ id:Date.now(), text:action.text }, ...state];
      localStorage.setItem("toDos", JSON.stringify(newToDos));
      return [{ id:Date.now(), text:action.text }, ...state];
    case DELETE:
      const deleteToDos = state.filter(toDo => toDo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(deleteToDos));
      return deleteToDos;
    default:
      return state;
  }
}

const store = createStore(reducer);

export const actionCreator = {
  addToDo,
  deleteToDo
}

export default store;
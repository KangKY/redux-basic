import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementsByClassName("counter");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier);
console.log(countStore)

const onChange = () => {
  console.log("onChanged");
  number.item(0).innerText = countStore.getState();
}
countStore.subscribe(onChange)

add.addEventListener("click", () => countStore.dispatch({ type:ADD }) )
minus.addEventListener("click", () => countStore.dispatch({ type:MINUS }) )

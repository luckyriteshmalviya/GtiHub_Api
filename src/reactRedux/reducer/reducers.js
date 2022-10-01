import { DECREMENT, INCREMENT } from "../action";

const InitialState = {
  counter: 0,
};

const UpdateNumber = (state = InitialState, action) => {
  if (action.type == INCREMENT) {
    return state + 1;
  } else if (action.type == DECREMENT) {
    return state - 1;
  }
  return state;
};
export default UpdateNumber;

// const InitState = {
//   product: [
//     {
//       id: 1,
//       title: "Apple",
//       Qty: 1,
//       price: 10,
//     },
//     {
//       id: 2,
//       title: "Orange",
//       Qty: 1,
//       price: 20,
//     },
//     {
//       id: 3,
//       title: "Mango",
//       Qty: 1,
//       price: 30,
//     },
//   ],
// };

// const ProductItem = (state = InitState, action) => {
//   if (action.type == "Add") {
//     return {};
//   }
// };

import { useSelector, useDispatch } from "react-redux";

export default function ReactReduxUi() {
  const mainState = useSelector((state) => state.UpdateNumber);
  const dispatch = useDispatch();
  const Add = () => {
    dispatch({ type: INCREMENT });
  };
  const less = () => {
    dispatch({ type: DECREMENT });
  };
  return (
    <>
      <h1>Hello I'm Redux</h1>
      <div>
        <button onClick={less}>-</button>
        <input type="number" value={mainState} />
        <button onClick={Add}>+</button>
      </div>
    </>
  );
}

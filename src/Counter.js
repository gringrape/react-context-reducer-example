import { useStore } from "./store";

export default function Counter() {
  const { state, dispatch } = useStore();

  const { count } = state;

  const handleClickPlus = () => {
    dispatch({ type: "plus" });
  };

  const handleClickMinus = () => {
    dispatch({ type: "minus" });
  };

  return (
    <div>
      <h1>this is counter</h1>
      <p>{count}</p>
      <button type="button" onClick={handleClickPlus}>
        plus
      </button>
      <button type="button" onClick={handleClickMinus}>
        minus
      </button>
    </div>
  );
}

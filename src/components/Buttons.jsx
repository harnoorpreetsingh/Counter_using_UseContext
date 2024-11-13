import { useContext } from "react";
import { CountContext } from "../context/Counter";

const Buttons = () => {
  const counterState = useContext(CountContext);
  console.log("retur9ing", typeof counterState.count);

  return (
    <>
      <h1>hi, count is : {counterState.count}</h1>
      <h1 className="text-2xl mt-12">
        Have set Minimum value to remain 0, so dont expect values in minus/negative. Thanks.
      </h1>
      <div className="flex justify-center gap-6 mt-12">
        <button
          className="btn mt-4"
          onClick={() => {
            counterState.setCount(counterState.count + 1);
          }}
        >
          Increment
        </button>

        <button
          disabled={counterState.count === 0}
          className="btn mt-4"
          onClick={() => {
            counterState.setCount(counterState.count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Buttons;

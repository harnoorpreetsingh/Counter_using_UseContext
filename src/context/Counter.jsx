import { createContext } from "react";
import { useState } from "react";

export const CountContext = createContext(null);

//making a provider that will provide the values

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  console.log(props)
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {" "}
      {props.children}
    </CountContext.Provider>
  );
};

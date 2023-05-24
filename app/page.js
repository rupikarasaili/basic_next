'use client'; 
import { useState } from "react";
import Feedback from "./feedback";
import Counter from "./Counter";


export default function Home() {
  const name = "Ram";
  const [count, setCount] = useState(0);
  const handleclick = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const sub = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1> Home </h1>
      <p> Today is {Date.now()} </p>
      <p> Hi my name is {name} </p>
      <h2> You clicked {count} times.</h2>
      <button onClick={handleclick}>Plus</button>
      <button onClick= {reset}> Zero</button>
      <button onClick={sub}>Minus</button>
      <Feedback />
      <Counter />
    </div>
  );
}
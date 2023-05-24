'use client'; 
import { useState } from "react";

const Statistics = (props) => {
    const {good, bad, neutral, all, avg } = props;
    return (
        <> 
        <p> Good {good} </p>
        <p> Neutral {neutral} </p>
        <p> Bad  {bad} </p>
        <p> All {all} </p>
        <p> Average {avg} </p>
        </>
    )
}

export default function Home() {
  
    const [good, setgood] = useState(0);
    const goodclick = () => {
        setgood(good + 1);
    };
    const [bad, setbad] = useState(0);
    const badclick = () => {
        setbad(bad + 1);
    };
    const [neutral, setneutral] = useState(0);
    const neutralclick = () => {
        setneutral(neutral + 1);
    };

    const all = good + bad + neutral; 
    const avg = good+neutral/2; 



  return (
    <div>
      <h2> give feedback </h2>
      <h2> Statistics </h2>
        <button onClick={goodclick}>Good</button>
        <button onClick={badclick}>Bad</button>
        <button onClick={neutralclick}>Neutral</button>
        <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} />

    </div>
  );
}
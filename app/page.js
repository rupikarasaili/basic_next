"use client";
// import Feedback from "./feedback.js";
// import Counter from "./counter.js";
// import SimpleCounter from "./components/BasicCounter.js";
import Notes from "../components/Notes.js";

// export default function Home() {
  // var [count, setCount] = useState(0);
  // const plus = () => {
  //   setCount(count + 1);
  // };
  // const minus = () => {
  //   setCount(count - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };

  //Simple Counter
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       {/* <div>
//         <h2>count is {count}</h2>
//         <button onClick={plus}>plus</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={minus}>minus</button>
//       </div>
//       <Feedback />
//       <Counter />*/}

//       {/* Simple Counter */}
//       <SimpleCounter count={count} handleClick={handleClick} />
//       <SimpleCounter count={count} handleClick={handleClick} />
//     </>
//   );
// }

export default function Home() {
  const notes = [
    {
      id: 1,
      desc: "css is nice",
      important: true,
    },
    {
      id: 2,
      desc: "js is nice",
      important: false,
    },
    {
      id: 3,
      desc: "react is nice",
      important: true,
    },
  ];
  return (
    <div>
      <Notes notes={notes} />
    </div>
  );
}

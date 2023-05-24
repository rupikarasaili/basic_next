'use client'; 
import { useState } from "react";

export default function Home() { 
    const [clicks, setCount] = useState({left: 0, right: 0}); 
    const [allclicks, setAll] = useState([]);  
    const [total, settotal] = useState(0)

    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right

        }
        setCount(newClicks);
        setAll(allclicks.concat('L'));
        settotal(total
             + 1);

    } 

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1

        }
        setCount(newClicks);
        setAll(allclicks.concat('R'));
        settotal(total +1 );
    } 

    return(
        <> 
        <h2> Stateful Component </h2>
        {clicks.left}
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
        {clicks.right} 
        <p> Total {total} </p>
        <p> {allclicks.join(' ')} </p>
        </>
    )

}
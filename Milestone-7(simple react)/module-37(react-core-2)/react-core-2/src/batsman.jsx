import { useState } from "react"

export default function Batsman(){

    const country={
        border: '3px solid green',
        borderRadius:'20px',
        padding: '15px',
    }

    const [runs, setRuns]= useState(0);

    const [four, setFour]= useState(0);
    const [six, setSix]=useState(0);


    const single=()=>{
        const newRun= runs+1;
        setRuns(newRun);
    }

    const Four=()=>{
        const newRun= runs+4;
        setRuns(newRun);

        const addFour= four+1;
        setFour(addFour);
    }

    const Six=()=>{
        const newRun= runs+6;
        setRuns(newRun);

        const addSix= six+1;
        setSix(addSix);

    }

    return(
        <div style={country}>
            <h2>Player: Bangladesh</h2>
            <h4>Score: {runs}</h4>
            <p><small>Four: {four}</small></p>
            <p><small>Six: {six}</small></p>

            <button onClick={single}>Single</button>
            <button onClick={Four}>Four</button>
            <button onClick={Six}>Six</button>
        </div>
    )
}
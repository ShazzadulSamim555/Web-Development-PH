import { Suspense, useState } from "react";
import "./App.css";
import AvalilableP from "./component/AvalilableP";
import Navbar from "./component/Navbar";
import SelectedP from "./component/SelectedP";

const fetchPlayers=async ()=> {
  const res=await fetch('/players.json');
  return res.json();
}

function App() {
  const promisePlayers=fetchPlayers();

  const [toggle, setToggle]=useState(true);

  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-between max-w-[1200px] mx-auto">
        <h2 className="font-bold text-xl">Available Players</h2>

        <div className="font-bold text-xs border-1 border-gray-400 rounded-lg">
          <button onClick={()=>setToggle(true)} className={`p-2 rounded-l-lg ${toggle===true? "bg-green-400":""}`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`p-2 rounded-r-lg ${toggle===false? "bg-green-400":""}`}>Selected(0)</button>
        </div>
      </div>
      
      
      {
        toggle===true? <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <AvalilableP promisePlayers={promisePlayers}></AvalilableP>
      </Suspense>:<SelectedP></SelectedP>
      }
    </>
  );
}

export default App;

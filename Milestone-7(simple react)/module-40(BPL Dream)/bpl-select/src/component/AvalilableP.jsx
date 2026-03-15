import React, { use } from "react";
import Player from "./Player";

// allrounder
// : 
// true
// batting_style
// : 
// "Left-Hand Bat"
// bowl_style
// : 
// "Slow Left-Arm Orthodox"
// country
// : 
// "Bangladesh"
// id
// : 
// 1
// name
// : 
// "Shakib Al Hasan"
// player_image
// : 
// "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTCbjTIedmQdn-KwXhJI2n1cywINB54Nd0gRHJoxd1UCh8m2NWk28NBvuUSuAJEk10SO9Nee0vwotSGiLQ"
// price
// : 
// 95

const AvalilableP = ({ promisePlayers }) => {
  const playersData = use(promisePlayers);
  console.log(playersData);

  return (
    <div className="grid grid-cols-3 justify-center w-[1200px] mx-auto">
      {playersData.map((player) => (<Player player={player}></Player>))}
    </div>
  );
};

export default AvalilableP;

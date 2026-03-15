import React, { useState } from "react";

const Player = ({player}) => {

  const [selected,setSelected]=useState(false);

  return (
    <div>
      <div>
        <div className="max-w-[1200px] mx-auto">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="p-5">
              <img
                className="h-[220px] rounded-lg"
                src={player.player_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span>
                  <img
                    className="w-[20px]"
                    src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LnBuZw.png"
                    alt=""
                  />
                </span>
                <span>{player.name}</span>
              </h2>
              <div>
                <p className="text-gray-600 flex">
                  <span>
                    <img
                      className="w-[25px]"
                      src="https://media.istockphoto.com/id/1170171742/vector/flag-related-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wjV6ofBZn50R6XWcHIDza89wwx46NbevBNKk1rm6cu8="
                      alt=""
                    />
                  </span>
                  <span>{player.country}</span>
                </p>

                <button></button>
              </div>

              <div className="border-b-1 border-gray-300"></div>

              <h3>Rating</h3>

              <div className="flex justify-between items-center">
                <p className="font-bold font-sm">{player.batting_style}</p>
                <p className="text-xs text-gray-600">{player.bowl_style}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">Price: ${player.price}</p>
                <button disabled={selected} onClick={()=> setSelected(true)} className="btn">{selected? "Selected": "Choose Player"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

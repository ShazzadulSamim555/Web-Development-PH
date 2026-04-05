import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";
export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const Family = () => {
  const asset = "Diamond";
  const newAsset = "Gold";

  const [money, setMoney]=  useState(0);

  return (
    <div className="familyTree">
      <h2>Family Tree</h2>

      <div>
        <h4 className="blue">Balance: {money}</h4>
      </div>

      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default Family;

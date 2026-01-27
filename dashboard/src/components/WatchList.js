import React, { useState } from "react";

import WatchListItem from "./WatchListItem";
  import { Tooltip, Grow } from "@mui/material";

import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:TSLA,MSFT,AAPL fut weekly,gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

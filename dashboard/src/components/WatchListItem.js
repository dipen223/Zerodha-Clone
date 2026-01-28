import React, { useState,useContext } from 'react'
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import BuyDialog from './BuyDialog';
import GeneralContext from './GeneralContext';

const WatchListItem = ({ stock, key }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListActions(true);

    }
    const handleMouseLeave = () => {
        setShowWatchListActions(false);

    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown ? "down" : "up"}>
                    {stock.name}
                </p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />)

                        :
                        (<KeyboardArrowUp className="up" />
                        )}
                    <span className='price'>{stock.price}</span>
                </div>

            </div>

            {showWatchListActions && <WatchListActions uid={stock.name}/>}
          

        </li>

    )
}

export default WatchListItem


const WatchListActions = ({ uid }) => {
      const generalContext = useContext(GeneralContext);
       const handleBuyClick = () => {
     generalContext.openBuyDialog(uid);
    };
       const handleSellClick = () => {
     generalContext.openSellDialog(uid);
    };

    return (
        <span className='actions'>
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement='top'
                    arrow
                    slots={{
                        transition: Grow,
                    }}
                       

                >
                    <button className='buy' onClick={() => handleBuyClick(uid)}>Buy</button>
                </Tooltip>
                <Tooltip
                    title="Sell (S)"
                    placement='top'
                    arrow
                    slots={{
                        transition: Grow,
                    }}

                >
                    <button className='sell' onClick={() => handleSellClick(uid)}>Sell</button>
                </Tooltip>
                <Tooltip
                    title="Graph (G)"
                    placement='top'
                    arrow
                    slots={{
                        transition: Grow,
                    }}

                >
                 <button className='action'><BarChartOutlined className='chart'/></button>
                </Tooltip>
                <Tooltip
                    title="More"
                    placement='top'
                    arrow
                    slots={{
                        transition: Grow,
                    }}

                >
                     <button className='action'><MoreHoriz className='chart'/></button>
                </Tooltip>
            </span>




        </span>
    )

}
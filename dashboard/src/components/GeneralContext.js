import React,{useState} from 'react';

import BuyDialog from './BuyDialog';
import SellDialog from './SellDialog';

const GeneralContext = React.createContext({
    openBuyDialog:(uid) => {},
    closeBuyDialog: () => {},
});

export const GeneralContextProvider = (props) =>{
    const [isBuyDialogOpen,setIsBuyDialogOpen] = useState(false);
    const [isSellDialogOpen,setIsSellDialogOpen] = useState(false);
    const [selectedStockUID,setSelectedStockUID] = useState("");


    const handleOpenBuyDialog = (uid) =>{
        setIsBuyDialogOpen(true);
        setSelectedStockUID(uid);
    };
    const handleOpenSellDialog = (uid) =>{
        setIsSellDialogOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyDialog = ()=>{
        setIsBuyDialogOpen(false);
        setSelectedStockUID("");
    };
    const handleCloseSellDialog = ()=>{
        setIsSellDialogOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
        value={{
            openBuyDialog:handleOpenBuyDialog,
            closeBuyDialog:handleCloseBuyDialog,
            openSellDialog:handleOpenSellDialog,
            closeSellDialog:handleCloseSellDialog,
        }}
        >
            {props.children}
            {isBuyDialogOpen && <BuyDialog uid={selectedStockUID}/>}
            {isSellDialogOpen && <SellDialog uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    );
};


export default GeneralContext;
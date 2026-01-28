import React,{useState} from 'react';

import BuyDialog from './BuyDialog';


const GeneralContext = React.createContext({
    openBuyDialog:(uid) => {},
    closeBuyDialog: () => {},
});

export const GeneralContextProvider = (props) =>{
    const [isBuyDialogOpen,setIsBuyDialogOpen] = useState(false);
    const [selectedStockUID,setSelectedStockUID] = useState("");


    const handleOpenBuyDialog = (uid) =>{
        setIsBuyDialogOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyDialog = ()=>{
        setIsBuyDialogOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
        value={{
            openBuyDialog:handleOpenBuyDialog,
            closeBuyDialog:handleCloseBuyDialog,
        }}
        >
            {props.children}
            {isBuyDialogOpen && <BuyDialog uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    );
};


export default GeneralContext;
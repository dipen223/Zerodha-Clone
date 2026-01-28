import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import GeneralContext from "./GeneralContext";
import axios from 'axios';

import "./BuyDialog.css";

const BuyDialog = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);


    const handleSellClick = () => {
        axios.post("http://localhost:8080/sellOrder", {
            name: uid,
            qty: stockQuantity,
            price:stockPrice,
            mode: "SELL",
        });
       closeSellDialog();
    }

    const { closeSellDialog } = useContext(GeneralContext);

    return (
        <Dialog open onClose={closeSellDialog}>
            <div className="buy-dialog-container">
                <p>You currently have 12 stocks of AAPL.</p>

                <div className="input-fields">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" defaultValue={1} onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" defaultValue={0}
                            onChange={(e) => setStockPrice(e.target.value)
                            }
                            value={stockPrice}
                        />
                    </fieldset>
                </div>

                <div className="dialog-buttons">
                    <button className="btn btn-blue" onClick={handleSellClick }>Sell Stock</button>
                    <button className="btn btn-grey" onClick={closeSellDialog}>
                        Cancel
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default BuyDialog;

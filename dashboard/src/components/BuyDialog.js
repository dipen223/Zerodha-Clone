import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import GeneralContext from "./GeneralContext";
import axios from 'axios';

import "./BuyDialog.css";

const BuyDialog = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);


    const handleBuyClick = () => {
        axios.post("http://localhost:8080/newOrder", {
            name: uid,
            qty: stockQuantity,
            price:stockPrice,
            mode: "BUY",
        });
       closeBuyDialog();
    }

    const { closeBuyDialog } = useContext(GeneralContext);

    return (
        <Dialog open onClose={closeBuyDialog}>
            <div className="buy-dialog-container">

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
                    <button className="btn btn-blue" onClick={handleBuyClick }>Place Order</button>
                    <button className="btn btn-grey" onClick={closeBuyDialog}>
                        Cancel
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default BuyDialog;

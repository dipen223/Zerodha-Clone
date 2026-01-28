import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import GeneralContext from "./GeneralContext";

import "./BuyDialog.css";

const BuyDialog = ({ uid }) => {
  const { closeBuyDialog } = useContext(GeneralContext);

  return (
    <Dialog open onClose={closeBuyDialog}>
      <div className="buy-dialog-container">

        <div className="input-fields">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" defaultValue={1} />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" defaultValue={0} />
          </fieldset>
        </div>

        <div className="dialog-buttons">
          <button className="btn btn-blue">Place Order</button>
          <button className="btn btn-grey" onClick={closeBuyDialog}>
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default BuyDialog;

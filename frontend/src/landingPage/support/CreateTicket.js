import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center fs-2">
          To create a ticket, select a relevant topic.
        </h1>
      </div>

      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4 p-5 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <div className="d-flex flex-column gap-3 mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Online Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Offline Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Company, Partnership and HUF Account
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              NRI Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Charges at Zerodha
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha IDFC First Bank 3-in-1 account
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 p-5 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Trading & Demat
          </h4>
          <div className="d-flex flex-column gap-3 mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Demat Account Related
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Trading Platform Issues
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Delivery and Margin
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Stocks & Securities
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Funds Transfer
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 p-5 mt-5 mb-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Other Queries
          </h4>
          <div className="d-flex flex-column gap-3 mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Technical Support
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Account Closure
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Reports & Statements
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Taxation Related
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              General Help
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4 p-5 mt-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <div className="d-flex flex-column gap-3 mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Online Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Offline Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Company, Partnership and HUF Account
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              NRI Account Opening
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Charges at Zerodha
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Zerodha IDFC First Bank 3-in-1 account
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-4 p-5 mt-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Trading & Demat
          </h4>
          <div className="d-flex flex-column gap-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Demat Account Related
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Trading Platform Issues
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Delivery and Margin
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Stocks & Securities
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Funds Transfer
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-4 p-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Other Queries
          </h4>
          <div className="d-flex flex-column gap-3 mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Technical Support
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Account Closure
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Reports & Statements
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Taxation Related
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              General Help
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

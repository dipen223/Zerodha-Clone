import React from "react";
import "./Team.css"
function Team() {
  return (
    <div className="container">
      <h3 className="text-center">People</h3>
      <div className="row p-4 mt-5 mx-auto">
        <div className="col-md-5 d-flex flex-column align-items-center">
          <img
            src="/images/nithinKamath.jpg"
            className="rounded-circle"
            style={{ width: "60%" }}
          ></img>
          <div className="text-center mt-4">
            <h4>Nithin Kamath</h4>
            <p className="text-muted">Founder,CEO</p>
          </div>
        </div>
        <div className="col-md-5 team-texts">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

import React from "react";
import './Universe.css';
function Universe() {
    return (
        <div className="container p-5 mt-5 ">
            <h2 className="text-center">The Zerodha Universe</h2>
            <p className="text-center fs-5 text-muted">
                Extend your trading and investment experience even further with our
                partner platforms{" "}
            </p>
            <div className="row universe mt-5">
                <div className="col-md-4 p-3">
                    <img src="/images/zerodhaFundhouse.png"></img>
                    <p className="text-muted">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-md-4  p-3">
                    <img src="/images/sensibullLogo.svg"></img>
                    <p className="text-muted">
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="/images/tijori.svg"></img>
                    <p className="text-muted">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>
            </div>

            <div className="row universe">
                <div className="col-md-4 p-3">
                    <img src="/images/streakLogo.png"></img>
                    <p className="text-muted">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="/images/smallcaseLogo.png"></img>
                    <p className="text-muted">
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className="col-md-4 p-3">
                    <img src="/images/dittoLogo.png"></img>
                    <p className="text-muted">
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>
                 <button style={{width:"150px",margin:"0 auto",padding:"1.3rem"}} className='p-2 btn btn-primary text-center fw-bold'>Sign up for free</button>
            </div>
           
        </div>
    );
}

export default Universe;

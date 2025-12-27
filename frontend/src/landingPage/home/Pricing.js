import React from 'react';
function Pricing() {
    return (
        <div className='container p-5'>
            <div class="row">
                <div class="col-md-5 col-12">
                    <h3>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{ textDecoration: "none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="col-md-7 col-12">
                    <div class="row">
                        <div class="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src="/images/pricing0.svg" style={{ width: "60%" }}></img>
                            <span style={{fontSize:"0.7rem"}}>Free account opening</span>
                        </div>
                        <div class="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src="/images/pricing0.svg" style={{ width: "90%" }}></img>
                            <span style={{fontSize:"0.6rem"}}>Free equity delivery and direct mutual funds</span>
                        </div>
                        <div class="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src="/images/pricing0.svg" style={{ width: "60%" }}></img>
                            <span style={{fontSize:"0.6rem"}} >Intraday and F&O</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Pricing;
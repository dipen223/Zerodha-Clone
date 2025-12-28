import React from 'react';
import OpenAccount from '../OpenAccount';
import './Pricing.css';
function Hero() {
    return ( 
        <div className="container p-5 mt-5 ">
            <div className='row text-center'>
                <h2>Charges</h2>
                <p className='text-muted listAll' style={{fontSize:"1.2rem"}}>List of all charges and taxes</p>
            </div>

            <div className='row p-5 mt-5'>
                <div className='col-md-4 text-center'>
                    <img src="/images/pricing0.svg" style={{width:"80%"}}></img>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src="/images/other-trades.svg" style={{width:"80%"}}></img>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.  </p>
                </div>
                <div className='col-md-4'>
                    <img src="/images/pricing0.svg" style={{width:"80%"}}></img>
                    <h3 className='text-center'>Free direct MF </h3>
                    <p className='text-center text-muted'> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.  </p>
                </div>


            </div>

        
            
        
           
        </div>
      
     );
}

export default Hero;
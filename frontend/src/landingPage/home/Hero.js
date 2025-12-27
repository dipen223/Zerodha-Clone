import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
          <div className='row text-center'>
            <img src='/images/landing.png' alt='Hero Image' className='mb-5 mx-auto' style={{width:"80%"}}/>
            <h1 mt-5>Invest in everything</h1>
            <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
            <button style={{width:"150px",margin:"0 auto"}} className='p-2 btn btn-primary'>Sign up for free</button>
          </div>

        </div>
      );
}

export default Hero;
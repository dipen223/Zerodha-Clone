import React from 'react';
function Hero() {
    return ( 
       <div className='container p-5 mt-5'>
        <div className='row text-center mt-5'>
            <h3>Zerodha Products</h3>
            <h5 className='mt-2 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms </h5>
            <p style={{marginBottom:"100px"}}>Check out our  <a href="#" style={{textDecoration:"none"}}> investment offerings →</a></p>
            <hr/>
        </div>

       </div>
     );
}

export default Hero;
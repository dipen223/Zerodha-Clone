import React from 'react';
function Education() {
    return ( 
      <div className="container p-5">
      <div class="row">
        <div class="col-md-6 col-12">
          <img src="/images/education.svg" style={{width:"80%"}}></img>

        </div>
        <div class="col-md-6 col-12">
          <h3 className='mt-4'>Free and open market education</h3>
          <div className='varsity'>
            <p className='mt-4'>
              Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. 
            </p>
            <a href="#" style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='trading'>
            <p className='mt-4 mb-4'>
              TradingQ&A, the most active trading and investment community in India for all your market related queries. 
            </p>
            <a href="#" style={{textDecoration:"none"}}>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      </div>
     );
}

export default Education;
import React from 'react'

const Summary = () => {
  return (

    <>

    <div className='username'>
       <h6>Hi,User!</h6>
      <hr className='divider'/>

      <div className='section'>
        <span>
            <p>Equity</p>
        </span>
        <div className='data'>
            <div className='first'>
                <h3>3.74k</h3>
                <p>Margin available</p>
            </div>
            <hr/>
             <div className='second'>
                <p>
                    Margins used <span>0</span>{" "}
                </p>
                <p>
                    Opening balance <span>3.74k</span>{" "}
                </p>
            </div>
        </div>
        <hr className='divider'/>
      </div>
      <div className='section'>
        <span>
            <p>Holdings {18}</p>
        </span>
        <div className='data'>
            <div className='first'>
                <h3 className='profit'>2.4K <small>+5.2%</small>{" "}
                </h3>
                <p>P&L</p>
            </div>
            <hr/>
             <div className='second'>
                <p>
                    Current Value<span>31.4K</span>{" "}
                </p>
                <p>
                  Investment <span>25.2K</span>{" "}
                </p>
            </div>
        </div>
        <hr className='divider'/>
      </div>


    </div>
    </>
    
  )
}

export default Summary
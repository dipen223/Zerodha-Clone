import React from 'react';

function Footer() {
    return ( 
        <div class="container p-5 border-top mt-5">
            <div class='row'>
                <div class="col-md col-12 mx-3">
                   <a class="navbar-brand" href="#">
                        <img src="/images/logo.svg" style={{width:"60%"}} alt="logo"></img>
                    </a>
                    <div class="rights d-flex flex-column mt-3">
                        <span>©2010 - 2025, Zerodha Broking Ltd.</span>
                        <span>All rights reserved.</span>
                    </div>
                    <div className='socials d-flex gap-3 mt-2'>
                        <a href="" style={{color:"black"}}>
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                           <i class="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="" style={{color:"red"}}>
                           <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        
                    </div>
                      <hr></hr>
                  
                    <div className='socials d-flex gap-3 mt-2'>
                        <a href="" style={{color:"red"}}>
                           <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="" style={{color:"green"}}>
                        <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="">
                           <i class="fa-brands fa-telegram"></i>
                        </a>
                       
                    </div>
                </div>
                <div class="col-md col-12 d-flex flex-column gap-3">
                    <h4>Account</h4>
                    <a>Open Demat Account</a>
                    <a>Minor Demat Account</a>
                    <a>NRI Demat Account</a>
                    <a>Commodity</a>
                    <a>Dematerialization</a>
                    <a>Fund Transfer</a>
                    <a>MTF</a>
                    <a>Referral Program</a>
                </div>
                <div class="col-md col-12 d-flex flex-column gap-3">
                    <h4>Support </h4>
                    <a>Contact us</a>
                    <a>Support portal</a>
                    <a>How to file a complaint?</a>
                    <a>Status of your complaints</a>
                    <a>Bulletin</a>
                    <a>Circular</a>
                    <a>Z-Connect blog</a>
                    <a>Downloads</a>

                </div>
                <div class="col-md col-12 d-flex flex-column gap-3">
                    <h4>Company</h4>
                    <a>About</a>
                    <a>Philosophy</a>
                    <a>Press & media</a>
                    <a>Careers</a>
                    <a>Zerodha Cares (CSR)</a>
                    <a>Zerodha.tech</a>
                    <a>Open source</a>

                </div>
                <div class="col-md col-12 d-flex flex-column gap-3">
                    <h4>Quick Links</h4>
                    <a>Upcoming IPOs</a>
                    <a>Brokerage charges</a>
                    <a>Market holidays</a>
                    <a>Economic calendar</a>
                    <a>Calculators</a>
                    <a>Markets</a>
                    <a>Sectors</a>
                </div>

            </div>

        </div>
     );
}

export default Footer;
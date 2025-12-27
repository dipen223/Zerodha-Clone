import React from "react";
function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5 col-12">
          <div>
              <h3 className="fw-semibold  mb-5">Trust with confidence</h3>
            <p className="fw-semibold mt-2 mb-1 text-muted fs-5">Customer first always</p>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div>
               <p className="fw-semibold mt-2 mb-1 text-muted fs-5">No spam or gimmicks</p>
               <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#">Our philosophies.</a>
            </p>
          </div>
          <div>
             <p className="fw-semibold mt-2 mb-1 text-muted fs-5">The Zerodha Universe</p>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <p className="fw-semibold mt-2 mb-1 text-muted fs-5">Do better with money</p>
            <p className="text-muted">
              With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-md-7 col-12">
          <img src="/images/ecosystem.png" style={{width:"90%"}}></img>
            <div className="mt-5 mb-5 mx-5">
            <a href="#" className="ms-5 mx-4" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i>  </a>
            <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
             </div>
        </div>
      </div>
      <div class="row">
        <img src="/images/pressLogos.png" style={{width:"70%",margin:"0 auto"}}></img>
      </div>
    </div>
  );
}

export default Stats;

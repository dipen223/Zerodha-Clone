import React from "react";
import './LeftSide.css';
function LeftSide({
  imageURL,
  productName,
  procutDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5 left-side gap-5">
        <div className="col-md-6 px-5">
          <img src={imageURL} className="mx-auto" style={{width:"99%"}}></img>
        </div>
        <div className="col-md-5 mt-5 px-5">
          <h3>{productName}</h3>
          <p className="mt-3" style={{lineHeight:"2"}}>{procutDescription}</p>

          <div className="product-links d-flex gap-5">
            <a href={tryDemo}>Try Demo  <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore}>Learn More  <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="product-stores mt-4">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;

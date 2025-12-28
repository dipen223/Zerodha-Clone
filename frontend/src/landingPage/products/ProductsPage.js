import React from "react";
import Hero from "./Hero";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSide
        imageURL="images/kite.png"
        productName="Kite"
        procutDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSide
      imageURL = "images/console.png"
        productName = "Console"
        procutDescription ="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
        learnMore = "Learn More"
      />
      <LeftSide
        imageURL="images/coin.png"
        productName="Coin"
        procutDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSide
      imageURL = "images/kiteconnect.png  "
        productName = "Kite Connect API"
        procutDescription ="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. "
        learnMore = "Kite Connect"
      />
      <LeftSide
        imageURL="images/varsity.png"
        productName="Varsity mobile"
        procutDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.  "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5">Want to know more about our technology stack? Check out the <a href="#" style={{textDecoration:"none"}}>Zerodha.tech </a> blog.</p>
      <Universe />
    </>
  );
}

export default ProductsPage;

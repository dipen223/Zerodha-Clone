import React from 'react';
function RightSide(
    {
        imageURL,
        productName,
        procutDescription,
        learnMore,
    }
) {
    return (
        <div className="container mt-5">
            <div className="row p-5 left-side gap-5">
                <div className="col-md-4 mt-5 px-5">
                    <h3>{productName}</h3>
                    <p className="mt-3" style={{ lineHeight: "2" }}>{procutDescription}</p>
                    <div>
                        <a href="#" style={{textDecoration:"none"}}>{learnMore}</a>
                    </div>
                </div>
                <div className="col-md-6 px-5" style={{marginTop:"-80px"}}>
                    <img src={imageURL} ></img>
                </div>
            </div>
        </div>
    );
}

export default RightSide;
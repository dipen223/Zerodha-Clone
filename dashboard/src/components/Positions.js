import React,{Fragment,useEffect,useState} from 'react';
import axios from 'axios';


const Positions = () => {
  const [allPositions,setAllPositions] = useState([]);


   useEffect(()=>{
    axios.get("http://localhost:8080/allPositions").then((res) => {
      setAllPositions(res.data);
    })
  },[]);

  return (
    <>
    <h3 className='title'>Positions ({allPositions.length})</h3>
    
     <div className='order-table'>
        <table>
            <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
            </tr>

         {allPositions.map((data, idx) => {
                     const currVal = data.price * data.qty;
                     const isProfit = currVal - data.avg * data.qty >= 0.0;
                     const profClass = isProfit ? "profit" : "loss";
                     const dayClass = data.isLoss ? "loss" : "profit";
         
                     return (
                       <tr key={idx}>
                         <td>{data.product}</td>
                         <td>{data.name}</td>
                         <td>{data.qty}</td>
                         <td>{data.avg}</td>
                         <td>{data.price}</td>
                         <td className={profClass}>{(currVal-data.avg*data.qty).toFixed(2)}</td>
                         <td className={dayClass}>{data.day}</td>
                       </tr>
                     );
                   })}
        </table>

     </div>
     </>
   
  )
}

export default Positions;
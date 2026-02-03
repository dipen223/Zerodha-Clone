import React,{useState,useEffect} from "react";
import axios from 'axios';
import { VerticalChart } from "./VerticalChart";


const Holdings = () => {
  const [allHoldings,setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      setAllHoldings(res.data);
    })
  },[]);

  const labels = allHoldings.map((holding) => holding["name"]);
  const data = {
    labels,
    datasets:[
      {
         
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. Cost</th>
            <th>LTP</th>
            <th>Curr Val</th>
            <th>P&L</th>
            <th>Net Chg.</th>
            <th>Day Chg.</th>
          </tr>

          {allHoldings.map((data, idx) => {
            const currVal = data.price * data.qty;
            const isProfit = currVal - data.avg * data.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = data.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
                <td>{data.name}</td>
                <td>{data.qty}</td>
                <td>{data.avg}</td>
                <td>{data.price}</td>
                <td>{currVal}</td>
                <td className={profClass}>{(currVal-data.avg*data.qty).toFixed(2)}</td>
                <td className={profClass}>{data.net}</td>
                <td className={dayClass}>{data.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalChart data={data}/>
    </>
  );
};


export default Holdings;

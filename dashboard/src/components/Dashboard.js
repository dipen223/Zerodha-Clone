import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';
import WatchList from './WatchList';


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <WatchList/>
        <div className='content'>
            <Routes>
                <Route exact path="/" element={<Summary/>}></Route>
                <Route exact path="/orders" element={<Orders/>}></Route>
                <Route exact path="/holdings" element={<Holdings/>}></Route>
                <Route exact path="/positions" element={<Positions/>}></Route>
                <Route exact path="/funds" element={<Funds/>}></Route>
                <Route exact path="/apps" element={<Apps/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
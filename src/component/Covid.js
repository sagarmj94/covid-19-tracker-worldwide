import 'bootstrap/dist/css/bootstrap.min.css';
import corona from '../imgg/corona.jpg'

import React, { useEffect, useState } from 'react';
const App = () => {
  const [result, setResult] = useState([]);
  const getApiData = async () => {
    const data = await fetch('https://api.covid19api.com/summary');
    const jsonData = await data.json();
    console.log(jsonData.Countries);
    setResult(jsonData.Countries);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <h1 className="mt-3 text-center">
          CountryWise Covid 19- <span className="text-danger">  Tracker</span>
        </h1>
        <img src={corona} alt ="covid-19" className="img-fluid "/>
      </div>
      <table className="table table-bordered">
      {/* <table className="border-top"> */}
         <thead >
           <tr className="tb-row ">
           
             <th scope="col">Sr.No</th>
             <th scope="col">Country</th>
             <th scope="col">Date</th>
             <th scope="col">New Confirmed</th>
             <th scope="col">Total Confirmed</th>
             <th scope="col">New Deaths</th>
             <th scope="col">New Recovered</th>
             <th scope="col">Total Recovered</th>
             
           </tr>
        </thead>

      {result.map((item,index) => {
        return (
          <>
          <tr >
            <td>{index+1}</td>
            <td>{item.Country}</td>
            <td>{item.Date.toLocaleString()}</td>
            <td>{item.NewConfirmed.toLocaleString()}</td>
            <td>{item.TotalConfirmed.toLocaleString()}</td>
            {/* <td>{item.TotalConfirmed}</td> */}
            {/* <td>{item.NewDeaths}</td> */}
            <td>{item.NewDeaths.toLocaleString()}</td>
            <td>{item.NewRecovered.toLocaleString()}</td>
            <td>{item.TotalRecovered.toLocaleString()}</td>
            </tr>
          </>
        );
      })}
      </table>
    </>
  );
};
export default App;


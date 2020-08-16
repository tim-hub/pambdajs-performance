import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Line } from 'react-chartjs-2';

import { csv1k } from './data/data';

import { readString } from 'react-papaparse'
import { getRandomColor } from './utils';

const results = readString(csv1k, {header: true})

const labels = results.meta.fields.slice(1);

const datasets = results.data.map(
  (data: any) => {
    const d = {...data}
    const id = d.id;
    delete d.id;
    const values = Object.values(d);

    return ({
      label: `Run ${id} times`,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: `${getRandomColor()}`,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: values
    });
  }
)

const data = {
  labels: labels,
  labelString: 'Time Spending(milliseconds)',
  datasets: datasets
};

function App() {
  console.log(results);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Line Chart for a sum of 1000 numbers</h2>
        <Line data={
          data
        }/>
        {/*<p>*/}
        {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>
  );
}

export default App;

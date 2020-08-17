import React from 'react';
import { Line } from 'react-chartjs-2';
import { readString } from 'react-papaparse';
import { csv10k, csv1k, csv100, csv100k } from '../data/data';
import { getRandomColor } from '../utils';
import { Layout } from '../Layout/Layout';
import { useRouteMatch, Redirect } from "react-router-dom";


export const ChartPage = (props: any) => {

  const keys = ['100', '10k', '1k', '100k'];

  let match = useRouteMatch();
  // @ts-ignore
  const key = match.params.key;
  console.log(key, keys, key.toString() in keys)
  if (!(keys.includes(key))) {
    return (
      <Redirect to={'/404'} />
    )
  }
  let results;
  if (key==='100') {
    results = readString(csv100, {header: true})
  }
  else if (key==='1k') {
    results = readString(csv1k, {header: true})
  }
  else if (key==='10k') {
    results = readString(csv10k, {header: true})
  }
  else {
    results = readString(csv100k, {header: true})
  }


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

  return (
    <Layout>
      <h4>
        Spec
      </h4>
      <p>
        Mac Book Pro 2018, 6 Core, 12 Processes, 16G Ram
      </p>
      <h2>{`Summing of ${key} numbers`}</h2>
      <i>From Single Process to 24 Processes, the measurement is time spending which less is better</i>
      <Line data={
        data
      }/>
    </Layout>
  )
}

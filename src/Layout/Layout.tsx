import logo from '../assets/undraw_react.svg';
import { Link } from 'react-router-dom';

import React from 'react';

export const Nav = () => (
  <div>
    <Link className="App-link" to="/">Home </Link>
    <Link className="App-link" to="/100k">Heavy Work (100k) </Link>
    <Link className="App-link" to="/10k">Medium Work (10k)</Link>
    <Link className="App-link" to="/1k">Light Work (1k)</Link>
    <Link className="App-link" to="/100">Tiny Work (100)</Link>
    <br/>
    <p>
    <i>The work load is to Sum numbers (scroll down to see)</i>
    </p>
    <h3>About</h3>
    <p>
      This project to show how multi-processing can help on a multi-core system on Node.
    </p>
    <strong>
      <a className="App-link" href={'https://github.com/tim-hub/pambdajs'}>PambdaJs</a> is used for empower the computer's multi process power.
    </strong>
  </div>
)


interface IProp {
  showHeader?: boolean
  children: any
}

export const Layout = ({showHeader, children}: IProp) => {
  return (
    <div className="App">
      {
        showHeader ? (
          <>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" width={'250px'}/>
              <Nav/>

            </header>
            <body>
            {children}
            </body>
          </>
        ) : (
          <>
            <div className={'Content-view'}>
            {children}
            </div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" width={'250px'}/>
              <Nav/>
            </header>
          </>
        )
      }
    </div>
  );
}

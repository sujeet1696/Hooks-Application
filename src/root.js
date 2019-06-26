import React,{Suspense,lazy} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, ButtonGroup} from 'react-bootstrap';
const AsyncBook = lazy(() =>import('./bookRecord'));
const AsyncAdd = lazy(() =>import('./add'));
// import BookRecord from './bookRecord';
// import Add from './add';

function Root() {
  return (
    <div className="container">
    <Suspense fallback={<div> loading... </div>}>
      <Router>
        <div className="d-flex flex-column">
          <ButtonGroup size="sm">
            <Button variant="outline-warning"><Link to="/records">Show Records</Link></Button>
            <Button variant="outline-success"><Link to="/add">Add Records</Link></Button>
          </ButtonGroup>
        </div>
          <Route path="/records" component={AsyncBook} />
          <Route path="/add" component={AsyncAdd} />
        </Router>
      </Suspense>
    </div>
  );
}

export default Root;

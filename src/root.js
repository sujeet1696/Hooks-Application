import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, ButtonGroup} from 'react-bootstrap';
import BookRecord from './bookRecord';
import Add from './add';

function Root() {
  return (
    <div className="container">
    <Router>
      <div className="d-flex flex-column">
        <ButtonGroup size="sm">
          <Button variant="outline-warning"><Link to="/records">Show Records</Link></Button>
          <Button variant="outline-success"><Link to="/add">Add Records</Link></Button>
        </ButtonGroup>
      </div>
        <Route path="/records" component={BookRecord} />
        <Route path="/add" component={Add} />
      </Router>
    </div>
  );
}

export default Root;

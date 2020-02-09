import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class ActionButtons extends Component {

  render(){
    return (
      <div class="text-center">
        <Link to="/add" className="btn btn-success">New</Link>
        <Button variant="warning mx-1">Randon</Button>
        <Button variant="primary mx-1">Compare</Button>
      </div>
  )}
}

export default ActionButtons;
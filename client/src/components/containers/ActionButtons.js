import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';

class ActionButtons extends Component {

  render(){
    return (
      <div class="text-center">
        <Button variant="success mx-1">New</Button>
        <Button variant="warning mx-1">Randon</Button>
        <Button variant="primary mx-1">Compare</Button>
      </div>
  )}
}

export default ActionButtons;
import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';

class UserActionButtons extends Component {

  render(){
    return (
      <div class="text-center">
        <Button variant="danger mx-1">Delete</Button>
        <Button variant="success mx-1">Update</Button>
        <Button variant="primary mx-1" >Create</Button>
      </div>
  )}
}

export default UserActionButtons;
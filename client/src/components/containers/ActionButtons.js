import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { submitUser } from '../../actions/actions';

class ActionButtons extends Component {

  constructor(){
    super();

    this.state = {
        random:{
        }
    };
  }



  generateRandom(){
    let randomSubmission = Object.assign({}, this.state.random);
    //alert(this.props.submission.name);

    randomSubmission["name"] = "mohsen";
    randomSubmission["mail"] = "mohsen";
    randomSubmission["address"] = "mohsen";
    //randomSubmission["birthday"] = randomName();
   // alert(updatedSubmission[event.target.id]);
    this.setState({
        submission: randomSubmission   
    });
  }



  submitSubmission(){
    this.generateRandom();
    //this.props.dispatch(submitUser(this.state.random));    
    //this.props.history.push("/");
  }

  render(){
    return (
      <div class="text-center">
        <Link to="/add" className="btn btn-success">New</Link>
        <Button variant="warning mx-1">Random</Button>
        <Button variant="primary mx-1">Compare</Button>
      </div>
  )}
}

export default ActionButtons;
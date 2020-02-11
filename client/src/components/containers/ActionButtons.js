import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { submitUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class ActionButtons extends Component {

  constructor(){
    super();

    this.state = {
        random:{
        }
    };
  }

 



  submitSubmission(){
    let randomSubmission = Object.assign({}, this.state.random);
    const rand = Math.floor(Math.random() * 100000);
    randomSubmission["name"] = "Mohsen " + rand;
    randomSubmission["mail"] = "mohsen"+ rand +"@gmail.com";
    randomSubmission["address"] = "Massada "+rand;
    randomSubmission["birthday"] = new Date(+(new Date()) - Math.floor(Math.random()*100000000000));
    this.props.dispatch(submitUser(randomSubmission));    
    window.location.reload();
  }

  render(){
    return (
      <div class="text-center m-3">
        <Link to="/add" className="btn btn-success">New</Link>
        <Button variant="warning mx-1" onClick={this.submitSubmission.bind(this)} >Random</Button>
        <Button variant="primary mx-1">Compare</Button>
    
      </div>
  )}
}

const mapStateToProps = state => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(ActionButtons));
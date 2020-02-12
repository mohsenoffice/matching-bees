import React, { Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { submitUser } from '../../actions/actions';
import { fetchUsers } from '../../actions/actions';
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


  submitRandom(){
    let randomSubmission = Object.assign({}, this.state.random);
    const rand = Math.floor(Math.random() * 100000);
    randomSubmission["name"] = "Mohsen " + rand;
    randomSubmission["mail"] = "mohsen"+ rand +"@gmail.com";
    randomSubmission["address"] = "Massada "+rand;
    randomSubmission["birthday"] = new Date(+(new Date()) - Math.floor(Math.random()*100000000000));
    this.props.dispatch(submitUser(randomSubmission));  
    this.props.dispatch(fetchUsers()); 
    window.location.reload();

  }

  compareSelected(){
    if(!this.props.selectedUser1._id || !this.props.selectedUser2._id){
      alert("Please select 2 users to comapre!");
      return;
    }
    var nameScore = this.stringScore(this.props.selectedUser1.name, this.props.selectedUser2.name);
    var ageScore = Math.abs(this.getAge(this.props.selectedUser1.birthday) - this.getAge(this.props.selectedUser2.birthday))
    var finalScore = nameScore/(ageScore/10);
    alert("Final score comapring:\n" + 
          this.props.selectedUser1.name +  "<-->" + 
          this.props.selectedUser2.name +"\n ==> " + finalScore);
  }

   stringScore(st1, st2){
    let score = 0;
    let firstMap = this.convertStringToMap(st1.toLowerCase());
    let secondMap = this.convertStringToMap(st2.toLowerCase());
    for (let [key, value] of firstMap) {
      if(secondMap.get(key)){
        score += value + secondMap.get(key);
      }
    }
    return score;
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  convertStringToMap(str){
    let strMap = new Map();
    [...str].forEach(c => {
      if(c != ' ')
        if(strMap.get(c)){
          strMap.set(c, strMap.get(c) +1);
        }else{
          strMap.set(c, 1);
        }
      });
    return strMap;
  }

  render(){
    return (
      <div class="text-center m-3">
        <Link to="/add" className="btn btn-success">New</Link>
        <Button variant="warning mx-1" onClick={this.submitRandom.bind(this)} >Random</Button>
        <Button variant="primary mx-1" onClick={this.compareSelected.bind(this)} >Compare</Button>
    
      </div>
  )}
}

const mapStateToProps = state => {
  return {
    selectedUser1: state.selectedUser1.selectedUser1,
    selectedUser2: state.selectedUser1.selectedUser2
  }
}

export default withRouter(connect(mapStateToProps)(ActionButtons));
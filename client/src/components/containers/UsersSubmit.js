import React, { Component} from 'react';
import UsersItemDetail from '../presentation/UsersItemDetail';
import { connect } from 'react-redux';
import { submitUser } from '../../actions/actions';
import { withRouter } from "react-router-dom";

class UsersSubmit extends Component {

    constructor(){
        super();

        this.state = {
            submission:{
            }
        };
    }

    componentDidMount(){
        
    }

    updateSubmission(event){
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission   
        });
    }

    submitSubmission(){
        this.props.dispatch(submitUser(this.state.submission));    
        this.props.history.push("/");
    }

    render(){

        return (
            <div>
                
                Name <input onChange={this.updateSubmission.bind(this)} id="name" type="text" placeholder= "Name"/><br/>
                Mail <input onChange={this.updateSubmission.bind(this)} id="mail" type="text" placeholder= "Mail"/><br/>
                Address<br/>
                <textarea onChange={this.updateSubmission.bind(this)} id="address" type="text">

                </textarea><br/>

                <button onClick={this.submitSubmission.bind(this)}>Submit story</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(UsersSubmit));
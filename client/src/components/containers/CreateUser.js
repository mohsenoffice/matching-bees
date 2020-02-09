import React, { Component} from 'react';
import UsersItemDetail from '../presentation/UsersItemDetail';
import CreateEditUser from '../presentation/CreateEditUser';
import { connect } from 'react-redux'
import { fetchUsersItem } from '../../actions/actions'
import { submitUser } from '../../actions/actions';
import Button from 'react-bootstrap/Button';

class CreateUser extends Component {


    constructor(){
        super();

        this.state = {
            submission:{
            }
        };
    }

    componentDidMount(){

    }

    submitSubmission(){
        this.props.dispatch(submitUser(this.state.submission));    
        this.props.history.push("/");
    }
    render(){
        return (
            <div>
               <Button variant="success mx-1" onClick={event =>  window.location.href='/'}>back</Button>
                <ul>
                    <CreateEditUser data={this.state.submission} /> 
                </ul>
                <Button variant="primary mx-1" onClick={this.submitSubmission.bind(this)} >Create</Button>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(CreateUser)
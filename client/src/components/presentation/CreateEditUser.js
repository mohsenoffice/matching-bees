import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UsersEdit from '../containers/UsersEdit';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  

class CreateEditUser extends Component {
    state = {
        birthday: new Date()
      };
     
      handleChange = date => {
        this.setState({
            birthday: date
        });
      };    
      
    render() {
        return (
            <div class="text-center">
                <UsersEdit submission={this.props.data}/>
                
                
            </div>
        )
    }
}

CreateEditUser.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired
        })
};

export default CreateEditUser;
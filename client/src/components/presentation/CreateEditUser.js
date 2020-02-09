import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserActionButtons from '../containers/UserActionButtons';

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
            <div class="w-75 text-center">
                <Card class="align-center">
                    <Card.Img variant="top" src="/resources/bee.jpg" />
                    <div class="position-absolute float-right"><Link to={`/users/${this.props.data.id}`}><b>Edit</b></Link></div>
                    {/* <Card.Img variant="top w-5"  src="resources/edit.png" />
                    <div class="position-absolute float-right">Top Left</div> */}
                    <Card.Body>
                        <Card.Text>
                            <div>
                                Full name                   
                                <input onChange={this.state.name} type="text" class="" id="name" placeholder={this.props.data.name}/>
                            </div>
                            <div>
                                Birthday                   
                                <DatePicker id="birthday" 
                                    selected={this.state.birthday}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                Address                 
                                <input type="text" class="" id="address" placeholder={this.props.data.name}/>
                            </div>
                            <div>
                                Email  
                                <input type="text" class="" id="mail" placeholder={this.props.data.name}/>
                            </div>

                            {/* <UserActionButtons /> */}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                
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
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersEdit from '../containers/UsersEdit';
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
            <div className="text-center">
                <UsersEdit submission={this.props.data}/>
                
                
            </div>
        )
    }
}

CreateEditUser.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        mail: PropTypes.string
        })
};

export default CreateEditUser;
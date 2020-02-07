import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { fetchUsersItem } from '../../actions/actions'

class UsersItemDetail extends Component {

    render(){
        return (
            <div>
                <h2>{this.props.data.id}</h2>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.mail}</p>
            </div>
        )
    }
}

UsersItemDetail.propTypes = {

    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired
    })
};

export default UsersItemDetail
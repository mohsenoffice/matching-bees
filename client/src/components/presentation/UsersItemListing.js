import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class UsersItemListing extends Component {
    render() {
        return (
            <div>
                <div><Link to={`/users/${this.props.data.name}`}><b>{this.props.data.mail}</b></Link></div>
                <div>{this.props.data.name}</div>

                
            </div>
        )
    }
}

UsersItemListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired
        })
};

export default UsersItemListing;
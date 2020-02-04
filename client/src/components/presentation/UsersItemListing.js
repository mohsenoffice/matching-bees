import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UsersItemListing extends Component {
    render() {
        return (
            <div>
                <div><b>{this.props.name}</b></div>
                <div>{this.props.mail}</div>
            </div>
        )
    }
}

UsersItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired
};

export default UsersItemListing;
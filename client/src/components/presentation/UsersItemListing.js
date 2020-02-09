import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card'
  

class UsersItemListing extends Component {
    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top" src="resources/bee.jpg" />
                    <div class="position-absolute w-100 text-right">
                    <input class="form-check-input w-100 float-left" type="checkbox" value="" id="defaultCheck1"/>
                        <Link to={`/users/${this.props.data._id}`}><b class="w-100 float-right">Edit</b></Link>
                        <Link to={`/users/${this.props.data._id}`}><b class="w-100 float-right">View</b></Link>
                    </div>
                    <div class="position-absolute  w-100"></div>
                    {/* <Card.Img variant="top w-5"  src="resources/edit.png" />
                    <div class="position-absolute float-right">Top Left</div> */}
                    <Card.Body>
                        <Card.Title>{this.props.data.name}</Card.Title>
                        <Card.Text>
                            {this.props.data.mail}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }
}

UsersItemListing.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired
        })
};

export default UsersItemListing;
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
                    <div class="position-absolute float-right"><Link to={`/users/${this.props.data.id}`}><b>Edit</b></Link></div>
                    <button type="button" class="btn btn-primary">view</button>
                    {/* <Card.Img variant="top w-5"  src="resources/edit.png" />
                    <div class="position-absolute float-right">Top Left</div> */}
                    <Card.Body>
                        <Card.Title>{this.props.data.name}</Card.Title>
                        <Card.Text>
                            {this.props.data.mail}
                            <div><Link to={`/users/${this.props.data.id}`}><b>{this.props.data.mail}</b></Link></div> 
                        </Card.Text>
                    </Card.Body>
                </Card>
                
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
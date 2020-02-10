import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'




class UsersItemListing extends Component {

    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top" src="resources/bee.jpg" />
                    <div class="position-absolute w-100 text-right">
                    <input class="form-check-input w-100 float-left" type="checkbox" value="" id="defaultCheck1"/>
                        <Link to={`/users/${this.props.data._id}`}><b class="w-100 float-right">Edit</b></Link>
                        <DisplayModal props={this.props.data} />
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
        mail: PropTypes.string.isRequired,
        address: PropTypes.string
        })
};

  

function DisplayModal(props) {
    const [lgShow, setLgShow] = React.useState(false);
  

    return (
      <div>
        <Button onClick={() => setLgShow(true)}>View</Button>
  
        <Modal {...props} 
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        > 
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
                    <Card >
                      <Card.Img variant="top" src="resources/bee.jpg" />
                      
                      <div class="position-absolute  w-100"></div>
                      <Card.Body>
                          <Card.Text>
                              <div>Full Name: {props.props.name} </div> 
                              <div>Birthday: {props.props.birthday} </div> 
                              <div>Email: {props.props.mail} </div> 
                              <div>Address: {props.props.address} </div> 
                          </Card.Text>
                      </Card.Body>
                  </Card>
          </Modal.Body>
        </Modal>
      </div>
    );
  }


export default UsersItemListing;
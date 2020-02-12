import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import { fetchSelectedItem } from '../../actions/actions';

class UsersItemListing extends Component {

    state = {
        isChecked: false
      };

    handleChecked(){
        this.setState({isChecked: !this.state.isChecked});
       
        if(this.state.isChecked === false){
            if(this.props.selectedUser1._id && this.props.selectedUser2._id){
                alert("You can select only 2 users!");
                document.getElementById(this.props.data._id).checked = false;
                return;
            }
            this.props.dispatch(fetchSelectedItem(this.props.data,true));
        }else{
            this.props.dispatch(fetchSelectedItem(this.props.data,false));
        }
    }
    
    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top"  className="img-height" src={this.props.data.img? this.props.data.img : "resources/bee.jpg"} />
                    <div className="position-absolute w-100 text-right">
                    <input className="form-check-input w-100 float-left" onChange={this.handleChecked.bind(this)} type="checkbox" value="" id={this.props.data._id}/>

                        <Link to={`/users/${this.props.data._id}`}><b className="w-100 float-right">Edit</b></Link>
                        <DisplayModal props={this.props.data} />
                    </div>
                    <div className="position-absolute  w-100"></div>
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
        address: PropTypes.string,
        img:  PropTypes.string
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
                      
                      <Card.Img variant="top" src={props.props.img? props.props.img : "resources/bee.jpg"} />
                      <div className="position-absolute  w-100"></div>
                      <Card.Body>
                          <Card.Text>
                              <span>Full Name: {props.props.name} </span> <br/>
                              <span>Birthday: {props.props.birthday} </span>  <br/>
                              <span>Email: {props.props.mail} </span>  <br/>
                              <span>Address: {props.props.address} </span>  <br/>
                          </Card.Text>
                      </Card.Body>
                  </Card>
          </Modal.Body>
        </Modal>
      </div>
    );
  }


  const mapStateToProps = state => {
    return {
        selectedUser1: state.selectedUser1.selectedUser1,
        selectedUser2: state.selectedUser2.selectedUser2
    }
}

export default connect(mapStateToProps)(UsersItemListing);
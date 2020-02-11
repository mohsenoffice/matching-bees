import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/actions';
import { deleteUser } from '../../actions/actions';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

class UsersEdit extends Component {

    constructor(){
        super();

        this.state = {
            submission:{
            },
        };
        
        
    }

    componentDidMount(){
        this.state.submission._id = this.props.submission._id
    }

    updateSubmission(event){
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission   
        });
        
    }

    submitSubmission(){
        this.state.submission._id = this.props.submission._id;
        this.props.dispatch(updateUser(this.state.submission));  
        console.log(this.state.submission);  
        this.props.history.push("/");
    }

    submitDelete(){
        this.state.submission._id = this.props.submission._id;
        this.props.dispatch(deleteUser(this.state.submission));  
        console.log(this.state.submission);  
        this.props.history.push("/");
    }

 

    render(){

        return (
            <div class="w-50 text-center">
                <Card >
                    <Card.Img class="img-fluid" alt="Responsive image" variant="top" src="/resources/bee.jpg" />
                    <div class="position-absolute float-right">
                       
							<input type="file" name="file"/>
						
                    </div>
                    {/* <Card.Img variant="top w-5"  src="resources/edit.png" />
                    <div class="position-absolute float-right">Top Left</div> */}
                    <Card.Body>
                        <Card.Text>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Full name  </span>                 
                                <input class="form-control w-50" defaultValue={this.props.submission.name} onChange={this.updateSubmission.bind(this)} id="name" type="text" placeholder= "Name" />
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Birthday  </span>             
                                <input class="form-control w-50 border-bottom"  defaultValue={this.props.submission.birthday} onChange={this.updateSubmission.bind(this)} id="birthday" type="date"/>
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Address   </span>              
                                <input class="form-control w-50"  defaultValue={this.props.submission.address} onChange={this.updateSubmission.bind(this)} id="address" type="text" placeholder= "address"/>
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Email  </span>
                                <input class="form-control w-50" defaultValue={this.props.submission.mail}  onChange={this.updateSubmission.bind(this)} id="mail" type="text" placeholder= "Mail"/>
                            </div>
                            <Button variant="danger mx-1"  onClick={this.submitDelete.bind(this)}>Delete</Button>
                            <Button variant="success mx-1"  onClick={this.submitSubmission.bind(this)}>Update</Button>
                            
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(UsersEdit));
import React, { Component} from 'react';
import UsersItemDetail from '../presentation/UsersItemDetail';
import { connect } from 'react-redux';
import { submitUser } from '../../actions/actions';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

class UsersSubmit extends Component {

    constructor(){
        super();

        this.state = {
            submission:{
            }
        };
    }

    componentDidMount(){
        
    }

    updateSubmission(event){
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
        this.setState({
            submission: updatedSubmission   
        });
    }

    submitSubmission(){
        this.props.dispatch(submitUser(this.state.submission));    
        this.props.history.push("/");
    }

 

    render(){

        return (
            <div class="w-50 text-center">
                <Card >
                    <Card.Img class="img-fluid" alt="Responsive image" variant="top" src="/resources/bee.jpg" />
                    <div class="position-absolute float-right">
                       
							<input type="file" />
						
                    </div>
                    {/* <Card.Img variant="top w-5"  src="resources/edit.png" />
                    <div class="position-absolute float-right">Top Left</div> */}
                    <Card.Body>
                        <Card.Text>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Full name  </span>                 
                                <input class="form-control w-50" onChange={this.updateSubmission.bind(this)} id="name" type="text" placeholder= "Name"/>
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Birthday  </span>             
                                <input class="form-control w-50 border-bottom"  onChange={this.updateSubmission.bind(this)} id="birthday" type="date"/>
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Address   </span>              
                                <input class="form-control w-50"  onChange={this.updateSubmission.bind(this)} id="address" type="text" placeholder= "address"/>
                            </div>
                            <div class="m-2">
                                <span class="float-left mr-2 w-25">Email  </span>
                                <input class="form-control w-50"  onChange={this.updateSubmission.bind(this)} id="mail" type="text" placeholder= "Mail"/>
                            </div>
                            <Button variant="success mx-1"  onClick={this.submitSubmission.bind(this)}>Create</Button>
                            
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

export default withRouter(connect(mapStateToProps)(UsersSubmit));
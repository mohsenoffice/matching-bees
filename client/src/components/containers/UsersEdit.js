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

 
    fileSelectedHandler = event =>{
        console.log(event.target.files[0]);
        this.getBase64(event.target.files[0]).then(base64 => {
            //localStorage["fileBase64"] = base64;
            let updatedSubmission = Object.assign({}, this.state.submission);
            
            updatedSubmission["img"] = base64;
                   // alert(updatedSubmission[event.target.id]);
                this.setState({
                    submission: updatedSubmission   
                });

            console.log("file stored",base64);
          });
        //this.state.submission.img = event.target.files[0];
    }
 
    getBase64 = (file) => {
        return new Promise((resolve,reject) => {
           const reader = new FileReader();
           reader.onload = () => resolve(reader.result);
           reader.onerror = error => reject(error);
           reader.readAsDataURL(file);
        });
      }


    render(){

        return (
            <div class="webkit-center">
                <div class="w-50">
                    <Card >
                        <Card.Img class="img-fluid" alt="Responsive image" variant="top" src="/resources/bee.jpg" />
                        <div class="position-absolute float-right">
                        
                        <input type="file" name="file" onChange={this.fileSelectedHandler}/>
                            
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
                                    <input class="form-control w-50 border-bottom" data-date-format="DD MM YYYY"  defaultValue={this.props.submission.birthday} onChange={this.updateSubmission.bind(this)} id="birthday" type="date"/>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(UsersEdit));
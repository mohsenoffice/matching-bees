import React, { Component} from 'react';
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
            },
            edit:false
        };
        
        
    }

    componentDidMount(){
    }

    updateSubmission(event){
        let updatedSubmission = Object.assign({}, this.state.submission);

        updatedSubmission[event.target.id] = event.target.value;
       // alert(updatedSubmission[event.target.id]);
        this.setState({
            submission: updatedSubmission   
        });
    }

    submitSubmission(){
        console.log(this.state.submission);
        this.props.dispatch(submitUser(this.state.submission));    
        this.props.history.push("/");
    }

    fileSelectedHandler = event =>{
        console.log(event.target.files[0]);
        this.getBase64(event.target.files[0]).then(base64 => {
            let updatedSubmission = Object.assign({}, this.state.submission);
            
            updatedSubmission["img"] = base64;
                this.setState({
                    submission: updatedSubmission   
                });

            console.log("file stored",base64);
          });
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
            <div class="text-center">
                <Button variant="secondary mx-1 float-left" onClick={event =>  window.location.href='/'}>back</Button>
                <div class="webkit-center">
                    <div class="w-50 " >
                        <Card >
                        <Card.Img variant="top" src={this.state.submission.img? this.state.submission.img : "resources/bee.jpg"} />
                            <div class="position-absolute float-right">
                            
                            <input type="file" name="file" onChange={this.fileSelectedHandler}/>
                                
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <div class="m-2">
                                        <span class="float-left mr-2 w-25">Full name  </span>                 
                                        <input class="form-control w-50" onChange={this.updateSubmission.bind(this)} id="name" type="text" placeholder= "Name" />
                                    </div>
                                    <div class="m-2">
                                        <span class="float-left mr-2 w-25">Birthday  </span>             
                                        <input class="form-control w-50 border-bottom"  data-date-format="DD MM YYYY"  onChange={this.updateSubmission.bind(this)} id="birthday" type="date"/>
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
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(UsersSubmit));
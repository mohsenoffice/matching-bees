import React, { Component} from 'react';
import CreateEditUser from '../presentation/CreateEditUser';
import { connect } from 'react-redux'
import { fetchUsersItem } from '../../actions/actions'
import Button from 'react-bootstrap/Button';

class UsersArticle extends Component {


    componentDidMount(){

        this.props.dispatch(fetchUsersItem(this.props.match.params.id));
    }

    render(){
        return (
            <div>
               <Button variant="secondary mx-1" onClick={event =>  window.location.href='/'}>back</Button>
                <ul>
                    <CreateEditUser data={this.props.usersItem} /> 
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersItem: state.users.usersItem
    }
}

export default connect(mapStateToProps)(UsersArticle)
import React, { Component} from 'react';
import UsersItemListing from '../presentation/UsersItemListing';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/actions'

class Users extends Component {
    componentDidMount(){
        this.props.dispatch(fetchUsers());
    }

    render(){

        const usersItems = this.props.users.map( (users, i) => {
            return ( <li key={i}><UsersItemListing data = {users} /></li> );
        });

        return (
            <div>
                <h2>Users Items</h2>
                <ul>
                {(this.props.users.length > 0) ? <ul>{usersItems}</ul> : <div>Sorry we have no users</div>}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(Users)
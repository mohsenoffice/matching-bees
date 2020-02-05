import React, {Component} from 'react'
import UsersItemListing from '../presentation/UsersItemListing';
import { connect } from 'react-redux'

class Users extends Component {
    render() {
        const usersItems = this.props.users.map( (users, i) => {
            return ( <li key={i}><UsersItemListing data = {users} /></li> );
        });

        return (
            <div>
                <h2>Users Items</h2>
                <ul>
                    {usersItems}
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

import React, { Component} from 'react';
import UsersItemListing from '../presentation/UsersItemListing';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/actions'
import ActionButtons from './ActionButtons';

class Users extends Component {
    componentDidMount(){
        this.props.dispatch(fetchUsers());
    }

    render(){

        const usersItems = this.props.users.map( (users, i) => {
            return ( <div class="container float-left w-25 mb-3" key={i}>
                        <UsersItemListing data = {users} />
                    </div> );
        });

        return (
            <div>
                <ActionButtons  />
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
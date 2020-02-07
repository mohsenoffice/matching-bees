import React, { Component} from 'react';
import UsersItemDetail from '../presentation/UsersItemDetail';
import { connect } from 'react-redux'
import { fetchUsersItem } from '../../actions/actions'

class UsersArticle extends Component {


    componentDidMount(){

        this.props.dispatch(fetchUsersItem(this.props.match.params.id));
    }

    render(){
        let { usersItem } = this.props; 
alert(usersItem.id);
        return (
            <div>
                <h2>Users Story</h2>
                <ul>
                <UsersItemDetail data={this.props.usersItem} />
                
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
import React, { Component} from 'react';
import UsersItemDetail from '../presentation/UsersItemDetail';
import { connect } from 'react-redux'
import { fetchUsersItem } from '../../actions/actions'

class UsersArticle extends Component {


    componentDidMount(){

        var fakeUsersItem = {
            id: '1',
            name: 'fake',
            mail: 'fake@fake.com',
            body: `wawwwwwww hdkjshdklasjdh kasjhd kjas hdkjashd `
        };
        
        this.props.dispatch(fetchUsersItem(fakeUsersItem));
    }

    render(){
        let { usersItem } = this.props; 

        return (
            <div>
                <h2>Users Story</h2>
                <ul>
                    { usersItem ? <UsersItemDetail data={usersItem} /> : null}
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
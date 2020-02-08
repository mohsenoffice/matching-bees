import React, {Component}
from 'react';
import Users from '../containers/Users';
import ActionButtons from '../containers/ActionButtons';




class Home extends Component {
    render() {
        return ( 
        <div>
            <ActionButtons />
            <Users />
         
        </div>
        )
    }
}

export default Home;
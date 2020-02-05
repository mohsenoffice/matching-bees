import React, {Component}
from 'react';
import Users from '../containers/Users';

class Home extends Component {
    render() {
        return ( 
        <div>
            <div> 
                <Users />
            </div> 
        </div>
        )
    }
}

export default Home;
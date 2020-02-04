import React, {Component}
from 'react';
import Users from '../containers/Users';

class Home extends Component {
    render() {
        return ( 
        <div>
            <h1 align="center">Matching Bees</h1> 
            <div> 
                <Users />
            </div> 
        </div>
        )
    }
}

export default Home;
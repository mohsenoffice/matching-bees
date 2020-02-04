import React, {Component} from 'react'
import UsersItemListing from '../presentation/UsersItemListing';

class Users extends Component {
    render() {
        return ( <div> 
                    <div align="center"> 
                    <button type="submit">New</button>
                    <button type="submit">Random</button>
                    <button type="submit">Match</button>
                         </div>
                    <ul>
                        <li><UsersItemListing id="1" name="Mohsen" mail="mohsen.office@gmail.com" /></li>
                        <li><UsersItemListing id="2" name="Mohsen2" mail="mohsen.office2@gmail.com" /></li>
                        <li><UsersItemListing id="3" name="Mohsen3" mail="mohsen.office3@gmail.com" /></li>
                    </ul>
                </div>)
    }
}

export default Users;
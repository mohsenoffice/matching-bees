import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {
   render() {
   return (
       <div>
           <div>
               <h1 class="text-primary text-center">Matching Bees</h1>
           </div>
           <div>
               { this.props.children }
           </div>
           <div class="w-100 float-left" >
                <div align="center"> 
                    <Link to={'/'}>Home </Link>
                   |
                    <Link to={'/about'}> About</Link>
                </div>
           </div>
       </div>
       );
   }
}

export default Layout;
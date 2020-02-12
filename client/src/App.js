import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';



import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import store from './stores/store';
import UsersArticle from './components/containers/UsersArticle';
import UsersSubmit from './components/containers/UsersSubmit';
import CreateUser from './components/containers/CreateUser';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <ReactNotification />
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path='/users/:id' component={UsersArticle}/>
                        <Route path='/add' component={UsersSubmit}/>
                        <Route path='/createUSer' component={CreateUser}/>
                    </Layout>
                </BrowserRouter>
            </Provider>
         );
    }
}

export default App;
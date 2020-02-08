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

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path='/users/:id' component={UsersArticle}/>
                        <Route path='/submit' component={UsersSubmit}/>
                    </Layout>
                </BrowserRouter>
            </Provider>
         );
    }
}

export default App;
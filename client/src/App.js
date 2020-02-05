import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';



import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import store from './stores/store';

class App extends Component {
    render() {
        return ( 
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Layout>
                </BrowserRouter>
            </Provider>
         );
    }
}

export default App;
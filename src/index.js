import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Portfolio } from './portfolio';
import { HashRouter as Router,Route } from 'react-router-dom';
import { About } from './about';

ReactDOM.render(<Router>
    <Route exact path='/yagya2612/portfolio' component={Portfolio}/> 
    <Route exact path='/about' component={About}/> 
   
    

    
    {/* <Route exact path='/' component={Login}/>  */}
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

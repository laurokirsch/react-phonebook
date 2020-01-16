import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './default.css';
import './App.css';
import './assets/vendors/iconfonts/mdi/css/materialdesignicons.css';

import Navbar from './components/layout/navbar.component';
import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import Register from './components/auth/register.component';
import Login from './components/auth/login.component';
import Alerts from './components/layout/alert.component';
import PrivateRoute from './components/routing/private-route.component';
import Template from './components/template/template.component';

import ContactState from './context/contact/contact-state';
import AuthState from './context/auth/auth-state';
import AlertState from './context/alert/alert-state';
import setAuthToken from './utils/set-auth-token';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    // <AuthState>
    //   <ContactState>
    //     <AlertState>
    //       <Router>
    //         <Fragment>
    //           <Navbar />
    //           <div className='container'>
    //             <Alerts />
    //             <Switch>
    //               <PrivateRoute exact path='/' component={Home} />
    //               <Route exact path='/about' component={About} />
    //               <Route exact path='/register' component={Register} />
    //               <Route exact path='/login' component={Login} />
    //             </Switch>
    //           </div>
    //         </Fragment>
    //       </Router>
    //     </AlertState>
    //   </ContactState>
    // </AuthState>
    <Template />
  );
};

export default App;

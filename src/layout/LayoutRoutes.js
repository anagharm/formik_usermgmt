import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import SignUpInLayoutRoute from './AuthLayout/AuthLayout'
import UserLayoutRoute from './UserLayout/UserLayout';

/** Components **/   
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import ForgotPassword from '../components/Auth/ForgotPassword';
import UpdateUser from '../components/Users/UpdateUser';
import ViewUser from '../components/Users/ViewUser';
import ListUsers from '../components/Users/ListUsers';


class LayoutRoutes extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/signin" />  
          </Route>  
          <SignUpInLayoutRoute exact path="/signin" component={SignIn} />  
          <SignUpInLayoutRoute exact path="/signup" component={SignUp} />  
          <SignUpInLayoutRoute exact path="/forgotpassword" component={ForgotPassword} />  
          <UserLayoutRoute exact path="/user/update/:usercode" component={UpdateUser} />
          <UserLayoutRoute exact path="/user/update" component={UpdateUser} />
          <UserLayoutRoute exact path="/user/view/:usercode" component={ViewUser} />
          <UserLayoutRoute exact path="/user/list" component={ListUsers} />
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default LayoutRoutes;
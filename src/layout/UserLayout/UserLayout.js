import React from 'react';  
import { Route } from 'react-router-dom';  
import UserFooter from './UserFooter';
import UserHeader from './UserHeader';

const UserLayout = ({ children }) => (                         
    <div className="container-fluid p-0 border">
        <UserHeader />
        <div>
          {children}
        </div>
        <UserFooter />
    </div>  
);  
  
const UserLayoutRoute = ({component: Component, ...rest}) => {  
return (  
  <Route {...rest} render={matchProps => (  
    <UserLayout>  
        <Component {...matchProps} />  
    </UserLayout>  
  )} />  
)  
};  
  
export default UserLayoutRoute;  
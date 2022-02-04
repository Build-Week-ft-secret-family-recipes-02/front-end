import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component:Component, ...rest}) {
  if (localStorage.getItem('token')) {
      return <Route render={()=> <Component {...rest}/>} />
  } else {
      return <Redirect to="/"/>
  }
}

export default PrivateRoute;
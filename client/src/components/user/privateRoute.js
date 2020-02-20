import React, { Component } from "react"
import IndexPage from "../../pages/index"
import { navigate } from "gatsby"
import { isAuthenticated } from "../../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isAuthenticated() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  } else if (!isAuthenticated() && location.pathname !== `/app/signup`) {
    navigate("/app/signUp")
    return null
  }

  return <IndexPage {...rest} />
}

export default PrivateRoute

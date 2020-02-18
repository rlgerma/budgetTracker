import React, { Component } from "react"
import IndexPage from "../../pages/index"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <IndexPage {...rest} />
}

export default PrivateRoute

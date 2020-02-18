import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/common/layout/layout"
import PrivateRoute from "../components/user/privateRoute"
import Profile from "../components/user/profile"
import Login from "../components/user/login"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App

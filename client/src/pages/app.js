import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/common/layout/layout"
import PrivateRoute from "../components/user/privateRoute"
import Profile from "../components/user/profile"
import Login from "../components/user/login"
import SignUp from "../components/user/signUp"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" component={Login} />
      <SignUp path="/app/signup" component={SignUp} />
    </Router>
  </Layout>
)

export default App

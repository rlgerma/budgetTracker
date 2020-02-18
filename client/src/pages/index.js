import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { getUser, isLoggedIn } from "../services/auth"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header>Hey there,{isLoggedIn() ? getUser().name : "User"}</Header>
    <Features />
    {isLoggedIn() ? (
      <>
        <center>
          <h2>
            Welcome back, <strong>{getUser().name}!</strong>
          </h2>
        </center>
        <GetStarted />
      </>
    ) : (
      <>
        <center>
          <h2>
            <Link to="/app/login">Log in</Link> to see the tracker!
          </h2>
        </center>
      </>
    )}
    <Footer />
  </Layout>
)

export default IndexPage

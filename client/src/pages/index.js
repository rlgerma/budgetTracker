import React from "react"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { logout, isAuthenticated, getUser } from "../utils/auth"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Chart from "../components/common/chart"
import { Section } from "../components/global"

const Home = ({ user }) => {
  return <p>Welcome back, {user.name ? user.name : "friend"}!</p>
}
const IndexPage = () => {
  const user = getUser()
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Navigation />
        <Header></Header>
        <Features />
        {isAuthenticated() ? (
          <>
            <center>
              <h2>
                <Home user={user} />
              </h2>
              <a
                href="#logout"
                onClick={e => {
                  logout()
                  e.preventDefault()
                }}
              >
                Log Out
              </a>
            </center>
            <GetStarted />
          </>
        ) : (
          <>
            <Section>
              <center>
                <h2>
                  <Chart />
                </h2>
              </center>
            </Section>
          </>
        )}
        <Footer />
      </Layout>
    </>
  )
}
export default IndexPage

import React from "react"
import Layout from "../common/layout/layout"
import Footer from "../sections/footer"
import LoginNav from "../common/navigation/loginNav"
import { navigate } from "gatsby"
import { silentAuth } from "../../utils/auth"
import { Container, Section } from "../global"
import styled from "styled-components"
import SEO from "../common/layout/seo"

class SignUp extends React.Component {
  state = {
    email: ``,
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    silentAuth(this.state)
  }

  render() {
    return (
      <>
        <Image />
        <Layout>
          <SEO title="Sign Up" />
          <LoginNav />
          <Container>
            <Welcome>
              <h1>Budget Tracker</h1>
            </Welcome>
            <Section>
              <FormBox>
                <form
                  method="post"
                  onSubmit={event => {
                    this.handleSubmit(event)
                    navigate(`/app/profile`)
                  }}
                >
                  <label>
                    Email
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleUpdate}
                    />
                  </label>
                  <br></br>
                  <br></br>
                  <label>
                    Username
                    <input
                      type="text"
                      name="username"
                      onChange={this.handleUpdate}
                    />
                  </label>
                  <br></br>
                  <br></br>
                  <label>
                    Password
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleUpdate}
                    />
                  </label>
                  <br></br>
                  <center>
                    <input className="submit" type="submit" value="Log In" />
                  </center>
                </form>
              </FormBox>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Message>
                <h2>Financial Accountability, done right</h2>{" "}
              </Message>
            </Section>
          </Container>
          <Image />
          <Footer />
        </Layout>
      </>
    )
  }
}

export default SignUp

const Image = styled(Section)`
  background-image: url("http://www.pngmart.com/files/7/Money-PNG-Clipart.png");
  background-attachment: fixed;
  background-size: auto;
  background-position: center;
`

const Welcome = styled(Section)`
  margin-bottom: -20%;
  -webkit-animation-name: message;
  -webkit-animation-duration: 1s;

  @keyframes message {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`

const Message = styled(Section)`
  -webkit-animation-name: message;
  -webkit-animation-duration: 3s;

  @keyframes message {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const FormBox = styled(Section)`
  max-width: 100%;
  height: auto;
  float: right;
  margin-right: 5%;
  margin-top: -5%;

  form {
    text-align: center;
  }

  label {
    padding: 12px;
  }

  input {
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 24px;
    width: 64%;
  }

  .submit {
    float: left;
    width: 64%;
    height: auto;
    margin-top: 8px;
    margin-left: 28%;
  }
`

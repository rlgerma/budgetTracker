import React, { useState, useEffect } from "react"
import API from "../../../utils/API"
import { Input, FormBtn } from "./form"

function Form() {
  // Setting our component's initial state
  const [Balance, setBalance] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Balance and store them with setBalance
  useEffect(() => {
    loadBalance()
  }, [])

  // Loads all Balance and sets them to Balance
  function loadBalance() {
    API.getBalance()
      .then(res => setBalance(res.data))
      .catch(err => console.log(err))
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setFormObject({ ...formObject, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    if (formObject.amount && formObject.author) {
      API.saveBalance({
        amount: formObject.amount,
      })
        .then(res => loadBalance())
        .catch(err => console.log(err))
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />

            <FormBtn
              disabled={!(formObject.amount && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Form

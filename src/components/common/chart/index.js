import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import moment from "moment"
import "./style.css"

const balance = JSON.parse(localStorage.getItem("balance"))
const balanceTime = JSON.parse(localStorage.getItem("time"))

const data = {
  labels: [balanceTime],
  datasets: [
    {
      label: "Checking Account",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [balance],
    },
  ],
}

const checkingBalance = {
  amount: "",
}
class Charts extends Component {
  constructor(props) {
    super(props)

    this.state = { ...checkingBalance }
  }
  onSubmit = event => {
    const moneyData = {
      amount: this.state,
      time: moment().format("MMM Do YY"),
    }

    localStorage.setItem("balance", JSON.stringify(moneyData.amount))
    localStorage.setItem("time", JSON.stringify(moneyData.time))

    event.preventDefault()
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const { amount } = this.state
    return (
      <div>
        <h2>Budget Tracker</h2>
        <Line data={data} />
        <form onSubmit={this.onSubmit}>
          <hr />
          <input
            style={{ textAlign: "center" }}
            type="text"
            name="amount"
            placeholder="deposit"
            value={amount}
            onChange={this.onChange}
          />
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#4DC0C0",
              color: "white",
              padding: "0 1em",
              borderRadius: "8em",
              margin: "0.5em",
            }}
          >
            Deposit
          </button>
          <br />
        </form>
      </div>
    )
  }
}
export default Charts

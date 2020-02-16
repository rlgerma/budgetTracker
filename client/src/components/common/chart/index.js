import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./style.css"

class Charts extends Component {
  createTable = () => {
    const iFrame = document.createElement("iFrame")
    ReactDOM.render(<Charts />, iFrame)
  }

  render() {
    return (
      <iframe
        className="chartStyle"
        title="mongoMoney"
        src="https://charts.mongodb.com/charts-project-0-jydwe/embed/charts?id=b157b68a-947a-435b-9dfa-c7846b7cc4cc&autorefresh=10&theme=dark"
      ></iframe>
    )
  }
}
export default Charts

import axios from "axios"

export default {
  // gets balance
  getBalances: function() {
    return axios.get("/api/balance")
  },
  // Saves a Balance to the database
  saveBalance: function(BalanceData) {
    return axios.post("/api/Balance", BalanceData)
  },
}

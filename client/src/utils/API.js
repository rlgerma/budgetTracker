import axios from "axios"

export default {
  // gets balance
  getBalances: function() {
    return axios.get("/api/balance")
  },
  // Deletes the Balance with the given id
  deleteBalance: function(id) {
    return axios.delete("/api/Balance/" + id)
  },
  // Saves a Balance to the database
  saveBalance: function(BalanceData) {
    return axios.post("/api/Balance", BalanceData)
  },
}

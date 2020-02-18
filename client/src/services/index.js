// Epstein didn't kill himself
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from "mongodb-stitch-browser-sdk"

const client = Stitch.initializeDefaultAppClient("budgettracker-fhyzj")

const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("budget")

client.auth
  .loginWithCredential(new AnonymousCredential())
  .then(user =>
    db
      .collection("myMoney")
      .updateOne(
        { owner_id: client.auth.user.id },
        { $set: { number: 42 } },
        { upsert: true }
      )
  )
  .then(() =>
    db
      .collection("myMoney")
      .find({ owner_id: client.auth.user.id }, { limit: 100 })
      .asArray()
  )
  .then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
  })
  .catch(err => {
    console.error(err)
  })

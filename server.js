const express = require("express");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const path = require("path");
const { PORT } = require("./config/keys");
require("./dbconnect");
require("./config/passport-google");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.use(passport.initialize());

const googleAuthRoutes = require("./routes/authGoogle");
app.use("/auth/google/", googleAuthRoutes);

const withdrawRoutes = require("./routes/api/expense");
app.use("/api/withdraw/", withdrawRoutes);

const depositRoutes = require("./routes/api/income");
app.use("/api/deposit/", depositRoutes);

// Connect to the Mongo DB

// Set up MongoDB Cluster if Available
const uri =
  "mongodb+srv://Alpha:Password1@cluster0-wqjz0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  const collection = client.db("budget").collection("myMoney");

  // perform actions on the collection object
  client.close();

  // Local Mongo Set up via Mongoose
  localMongo = () => {
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  };
  if (err) {
    console.log("No Connection to MongoDB Cluster: -> LOCAL ONLY");
    localMongo();
    throw err;
  } else console.log("Connected to MondoDB Cluster");
});

// Start API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/budget",
  secretOrKey: process.env.SECRET || "secret",
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_SECRET,
  PORT: process.env.PORT || 3001
};

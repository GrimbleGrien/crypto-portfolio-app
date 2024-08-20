require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/crypto-portfolio',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key',
  // Add other keys as needed
};

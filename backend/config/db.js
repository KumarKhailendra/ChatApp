const mongoose = require('mongoose');

function connectDB(){
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 30000, // Increased timeout value
    maxPoolSize: 50,
    socketTimeoutMS: 60000,
  };
  
  const mongoURL = process.env.MONGODB_URL;
  
  mongoose.connect(mongoURL, options)
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.error('Error connecting to the database', err);
      process.exit(1); // Exit the application if database connection fails
    });
}


module.exports = connectDB;
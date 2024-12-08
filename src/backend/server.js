const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('./db'); // MongoDB connection
const routes = require('./routes/userRoutes');
const path = require('path');


const app = express();
userRoutes(app);

app.use(bodyParser.json());

// Serve Static Files (Uploaded Files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use Routes
app.use('/api', routes);
// Use the Router for user routes

app.use(cors()); // Enable CORS

app.use('/api/user', userRoutes); // Use user routes for signup, login, etc.

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const express = require('express');
const connectDB = require('./config/db');
const users = require('./config/routes/api/users');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello, my app is running'));
// Define routes
app.use('/api/users', (req, res) => res.send('This is users page'));
app.use('/api/auth', (req, res) => res.send('This is auth page'));
app.use('/api/posts', (req, res) => res.send('This is the posts page'));
app.use('/api/profile', (req, res) => res.send('This is the profile page'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
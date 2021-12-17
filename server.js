const express = require('express');
const connectDB = require('./config/db');
const users = require('./config/routes/api/users');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));
// Define routes
app.use('/api/users', (req, res) => res.send('This is users page'));
app.use('/api/auth', (req, res) => res.send('This is auth page'));
app.use('/api/posts', (req, res) => res.send('This is the posts page'));
app.use('/api/profile', (req, res) => res.send('This is the profile page'));

//another method
// app.get("/", (req, res) => {
//     //handle root
// });

// Define Routes
// module.exports = function(app){
//     app.get('/api/users', (req, res) => {
//         res.send('this is the index page!');
//     })
// }
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
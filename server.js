const express = require('express');
const connectDB = require('./config/db');
const users = require('./config/routes/api/users');

const app = express();

//Connect Database
connectDB();

// app.get('/', (req, res) => res.send('API Running'));
//another method
app.get("/", (req, res) => {
    //handle root
});

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
const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');

// we are connecting mongodb here. API call linked in config.json file
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log('MongoDB Connected...');
    } catch(err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// dotenv.config()
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connect seccessfully')
    } catch (error) {
        console.log('connect fail')
    }
}

module.exports = {connect}
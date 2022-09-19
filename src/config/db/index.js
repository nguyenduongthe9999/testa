const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://The529:The529@cluster0.4rw2ops.mongodb.net/?retryWrites=true&w=majority' , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connect seccessfully')
    } catch (error) {
        console.log('connect fail')
    }
}

module.exports = {connect}
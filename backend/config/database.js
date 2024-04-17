const mongoose = require("mongoose")


const connectDatabase = () => {
    mongoose.connect(`${process.env.MONGODB_URI}`,
        { useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
            console.log(`Mongodb connected with server : ${data.connection.host}`)
        }).catch((err)=>{
            console.log(`Mongodb not connected due to : ${err}`)
        })
        

}


module.exports = connectDatabase
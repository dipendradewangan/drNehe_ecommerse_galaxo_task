const app = require('./app')


// import internal modules
const connectDatabase = require('./config/database')

const dotenv = require("dotenv")


// unhandeled uncought exception rejection
process.on("uncaughtException", (err)=>{
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down the server due to Uncought Exception`)
    process.exit(1)

})



dotenv.config({path : "backend/config/config.env"})

// connection to database
connectDatabase()




const server = app.listen(process.env.PORT, (req, res) => {
    console.log(`server is listening on http://localhost:${process.env.PORT}`)
})


// unhandeled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error : ${err.message}`)
    console.log(`Shutting down the server due to Unhandled Promise Rejection`)

    server.close(()=>{
        process.exit(1)
    })
})
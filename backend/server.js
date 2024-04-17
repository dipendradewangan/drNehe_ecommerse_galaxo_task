const app = require('./app')


// import internal modules
const connectDatabase = require('./config/database')

const dotenv = require("dotenv")

dotenv.config({path : "backend/config/config.env"})

// connection to database
connectDatabase()

const port = process.env.PORT

app.listen(port, (req, res) => {
    console.log(`server is listening on http://localhost:${port}`)
})
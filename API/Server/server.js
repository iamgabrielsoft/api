
const { PORT, SECERET_KEY } = require("./config/constant")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const session = require("express-session")
const initRoutes = require('./routes/routes')
// const Signup = require("./controllers/authentication")

const app = express()



app.use(session({
    secret: "SECERET_KEY", 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true }
}))



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors('*'))





initRoutes(app)     //ALL API
app.listen(PORT || 5000, () => console.log("Servering CIRCADA API... "))
const express = require('express')
const app = express()

const contactsRouter = require('./routers/contactsRouter')

app.set("view engine", "ejs")

app.use(express.static(__dirname + "/public"))

app.use('/contacts', contactsRouter)



app.listen(3030)
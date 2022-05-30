const express = require("express")
const { request } = require("http")
const contactsRouter = express.Router()



contactsRouter.get("/", (req, res) => {
    res.render('contacts.ejs', {
        email: 'almas12345@gmail.com',
        phone: "88005553535",
        addresses: ['Abaya 24', "Kenesary 40", "Auezova 22", "Orynbor 52"]
    })
})


module.exports = contactsRouter
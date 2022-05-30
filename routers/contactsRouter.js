const express = require("express")
const { request } = require("http")
const contactsRouter = express.Router()

let array = [
    {
        id: 1,
        model: "HP",
        price: '250,000',
        categoryName: 'office'
    },{
        id: 2,
        model: "Lenovo IdeaPad 15",
        price: '150,000',
        categoryName: 'office'
    },{
        id: 3,
        model: "MacBook Air 2017",
        price: '400,000',
        categoryName: 'office'
    },{
        id: 4,
        model: "Asus ROG",
        price: '900,000',
        categoryName: 'gaming'
    },{
        id: 5,
        model: "Vivo Gaming Ultra Top",
        price: '100,000,000',
        categoryName: 'gaming'
    },{
        id: 6,
        model: "MCI",
        price: '900,000',
        categoryName: 'gaming'
    },{
        id: 1,
        model: "HP",
        price: '250,000',
        categoryName: 'office'
    },{
        id: 2,
        model: "Lenovo IdeaPad 15",
        price: '150,000',
        categoryName: 'office'
    },{
        id: 3,
        model: "MacBook Air 2017",
        price: '400,000',
        categoryName: 'office'
    },{
        id: 4,
        model: "Asus ROG",
        price: '900,000',
        categoryName: 'gaming'
    },{
        id: 5,
        model: "Vivo Gaming Ultra Top",
        price: '100,000,000',
        categoryName: 'gaming'
    },{
        id: 6,
        model: "MCI",
        price: '900,000',
        categoryName: 'gaming'
    },
]

contactsRouter.get("/", (req, res) => {
    res.render('contacts.ejs', {
        array: array
    })
})

contactsRouter.get('/:categoryName', (request, response) => {
    let categoryName = request.params.categoryName
    let foundCarIndex = array.filter(item => item.categoryName == categoryName) 

    response.render('contacts.ejs', {

        array: foundCarIndex
    })
    if(foundCarIndex != -1){
        response.json(foundCarIndex)
    } else {
        response.status(404).send('Далвайов?')
    }
});


module.exports = contactsRouter
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 4000

const db = require('./models')


//parse incoming encoded form data, populate req.body object
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ======== HTML ROUTES ======== //
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html')
})


// ======== START SERVER ======== //
app.listen(PORT, () => console.log('Server is running on localhost:4000'))
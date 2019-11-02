const Books = require('../models/book')


module.exports = function(app){
    app.get("/", (req, res)=> {
        res.send("Here")
    })
    app.get("/api/getallbooks", (req, res)=> {
        Books.find({}).then(function(data){
            console.log("Routes", data)
            res.json(data)
        })
    })
    app.post("/api/addbook", (req, res)=> {
        Books.create(req.body).then(function(data){
            console.log(data)
            res.json(data)
        })
    })
}
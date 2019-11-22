var express = require("express"); 

var router = express.Router(); 

var burger = require("../models/burger.js");

router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        }; 
        console.log(hbsObject); 
        res.render("index", hbsObject); 
    }); 
}); 

router.post("/api/burgers", function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/")
    });
});

router.put("/api/burgers/:id", function (req, res){
    let id = req.params.id; 
    burger.updateOne(id, req.body, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end(); 
        }
        res.json({ id: result }); 
    }); 
}); 

module.exports = router; 
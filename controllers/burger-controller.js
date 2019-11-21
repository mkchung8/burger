var express = require("express"); 

var router = express.Router(); 

var burger = require("../models/burger");

router.get("/", function (req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        }; 
        console.log(hbsObject); 
        res.render("index", hbsObject); 
    }); 
}); 

router.post("/api/bugers", function(req,res){
    burger.insertOne(req.body.burger_name, function(result){
        res.redirect("/"); 
    });
});

router.put("/api/burgers/:id", function (req, res){
    let id = req.params.id; 
    burger.updateOne(id, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end(); 
        }
        res.redirect("/"); 
    }); 
}); 

module.exports = router; 
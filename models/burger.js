var orm = require("../config/orm"); 

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res); 
        }); 
    },
    
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(res){
            cb(res);
        });
    },

    updateOne: function(id, data, cb) {
        orm.updateOne(id, data, function(res){
            cb(res); 
        });
    }
}; 

module.exports = burger;

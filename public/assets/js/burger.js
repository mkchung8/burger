$(document).ready(function () {

    console.log(`burger.js is connected`)

    $(".eatBtn").on("click", function (event) {
        let id = $(this).data("burgerid");
        let updateDev = {
            devoured: true
        };
        console.log("/api/burgers/"+id)
        $
            .ajax("/api/burgers/"+id, {
                type: "PUT",
                data: updateDev
            })
            .then(function () {
                console.log(`updated id ${id}`);
            });
            location.reload();
    });

    $("#submit").on("click", function(event){
        event.preventDefault();
        
        let newBurger = {
            burger_name: $("#inputBurgerName").val().trim()
        }; 

        $
        .ajax("/api/burgers", {
            method: "POST", 
            data: newBurger
        })
        .then(function(){
            console.log(`New Burger Added`);
            location.reload(); 
        }); 

    })

});
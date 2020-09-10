$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "#enabled", () => {

        var id = $(this)[0].activeElement.attributes["data-id"].nodeValue;
        var name = $(this)[0].activeElement.attributes["data-name"].nodeValue;
        var price = $(this)[0].activeElement.attributes["data-price"].nodeValue;

        updateCount(id,name,price);

        var cartCount = 0;

        if (typeof (Storage) !== "undefined") {
            var record = JSON.parse(sessionStorage.getItem("cartItems"));
        }
        if(record == null){
            $("#cartNumber").html(parseInt(cartCount));
        }else{
            for(x in record){
                cartCount += parseInt(record[x][2]);
            }
            $("#cartNumber").html(parseInt(cartCount));
        }

        //Cart-Add Alert
        $('#alert-add .toast-body').html(
           name + " has been added to the cart."
        );
        $('#alert-add').toast({animation: true, delay: 2000});
        $('#alert-add').toast('show');

    });
});

function updateCount(id,name,price) {
    var locate = false;
    if (typeof (Storage) !== "undefined") {
        var record = JSON.parse(sessionStorage.getItem("cartItems"));
    }
    if(record == null){
        record = {};
    }else{
        for(x in record){
            if(x == id){
                var temp = parseInt(record[x][2]);
                temp++;
                record[x][2] = temp;
                locate = true;
            }
            if(locate) break;
        }
    }
    if(locate == false){
       record[id] = [name,price,1];
    }
    var data = JSON.stringify(record);
    sessionStorage.setItem("cartItems",data);
}

// function setCount() {
//     let i = parseInt(localStorage.getItem("tCount"));
//     i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
// }

// setCount();

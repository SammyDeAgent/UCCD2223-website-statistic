$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "#enabled", () => {
        updateCount($(this)[0].activeElement.attributes["data-id"].nodeValue);

        var cartCount = 0;

        if (typeof (Storage) !== "undefined") {
            var record = JSON.parse(sessionStorage.getItem("cartItems"));
        }
        if(record == null){
            $("#cartNumber").html(parseInt(cartCount));
        }else{
            for(x in record){
                cartCount += parseInt(record[x]);
            }
            $("#cartNumber").html(parseInt(cartCount));
        }  
    });
});

function updateCount(id) {
    var locate = false;
    if (typeof (Storage) !== "undefined") {
        var record = JSON.parse(sessionStorage.getItem("cartItems"));
    }
    if(record == null){
        record = {};
    }else{
        for(x in record){
            if(x == id){
                var temp = parseInt(record[x]);
                temp++;
                record[x] = temp;
                locate = true;
            }
            if(locate) break;
        }
    }
    if(locate == false){
       record[id] = 1;
    }
    var data = JSON.stringify(record);
    sessionStorage.setItem("cartItems",data);
}

// function setCount() {
//     let i = parseInt(localStorage.getItem("tCount"));
//     i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
// }

// setCount();

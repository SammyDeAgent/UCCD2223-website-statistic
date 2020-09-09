$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "button", () => {
        updateCount($(this)[0].activeElement.attributes["data-id"].nodeValue);

        var cartCount = 0;

        if (typeof (Storage) !== "undefined") {
            var record = sessionStorage.getItem("cartItems");
        }
        if(record = null){
            $("#cartNumber").html(parseInt(cartCount));
        }else{

        for(let i = 0 ; i < record.length; i++){
            cartCount += parseInt(record[i].count);
        }
        $("#cartNumber").html(parseInt(cartCount));
    }
    });
});

function updateCount(id) {
    var locate = false;
    if (typeof (Storage) !== "undefined") {
        var record = sessionStorage.getItem("cartItems");
    }
    if(record == null){
        record = [];
    }

    for(let i = 0; i < record.length; i++){
        if(record[i].id == id){
            record[i].count++;
            locate = true;
        }
        if(locate) break;
    }
    if(locate == false){
        var obj = new Object();
        obj.id = id;
        obj.count = 1;
        record.push(obj);
    }

    sessionStorage.setItem("cartItems",record);
}

// function setCount() {
//     let i = parseInt(localStorage.getItem("tCount"));
//     i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
// }

// setCount();

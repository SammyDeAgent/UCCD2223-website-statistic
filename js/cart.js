$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "button", () => {
        updateCount($(this)[0].activeElement.attributes["data-id"].nodeValue);
    });
});

function updateCount(id) {
    var locate = false;
    var record = sessionStorage.getItem("cartItems");
    if(!Array.isArray(record) || !record.length){
        record = [];
    }

    for(let i = 0; i < record.length; i++){
        if(record[i][0] == id){
            record[i][1].count++;
            locate = true;
        }
    }
    if(!locate){
        record.push([id,1]);
    }

    sessionStorage.setItem("cartItems",record);
}

// function setCount() {
//     let i = parseInt(localStorage.getItem("tCount"));
//     i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
// }

// setCount();

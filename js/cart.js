$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "button", () => {
        updateCount();

        //console.log($(this)[0].activeElement.attributes["data-id"].nodeValue);
    });
});

function updateCount() {
    let i = parseInt(localStorage.getItem("tCount"));
    i ? (i += 1) : (i = 1);
    localStorage.setItem("tCount", i);
    $("#cartNumber").html(i);
}

function setCount() {
    let i = parseInt(localStorage.getItem("tCount"));
    i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
}

setCount();

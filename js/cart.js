var temp = JSON.parse(localStorage.getItem("cartItem"));

if (temp == null) {
    var food = [
        { name: "chicken-1", price: 6, count: 0 },
        { name: "chicken-2", price: 6, count: 0 },
        { name: "chicken-3", price: 6, count: 0 },
        { name: "chicken-4", price: 6, count: 0 },
        { name: "burger-1", price: 6, count: 0 },
        { name: "burger-2", price: 6, count: 0 },
        { name: "burger-3", price: 6, count: 0 },
        { name: "burger-4", price: 6, count: 0 },
        { name: "coffee-1", price: 6, count: 0 },
        { name: "coffee-2", price: 6, count: 0 },
        { name: "coffee-3", price: 6, count: 0 },
        { name: "coffee-4", price: 6, count: 0 },
    ];
} else {
    var food = temp;
}

$(function () {
    $(".add-cart").click(function () {
        var id = parseInt($(this).attr("data-id"));
        food[id].count++;
        localStorage.setItem("cartItem", JSON.stringify(food));
    });
});

// $.getJSON("../JSON/fchicken.json", function (result) {});
// $.getJSON("../JSON/burger.json", function (result) {});
// $.getJSON("../JSON/coffee.json", function (result) {});

// var temp = JSON.parse(localStorage.getItem("cartItem"));

// if (temp == null) {
//     var food = [
//         { name: "chicken-1", price: 6, count: 0 },
//         { name: "chicken-2", price: 6, count: 0 },
//         { name: "chicken-3", price: 6, count: 0 },
//         { name: "chicken-4", price: 6, count: 0 },
//         { name: "burger-1", price: 6, count: 0 },
//         { name: "burger-2", price: 6, count: 0 },
//         { name: "burger-3", price: 6, count: 0 },
//         { name: "burger-4", price: 6, count: 0 },
//         { name: "coffee-1", price: 6, count: 0 },
//         { name: "coffee-2", price: 6, count: 0 },
//         { name: "coffee-3", price: 6, count: 0 },
//         { name: "coffee-4", price: 6, count: 0 },
//     ];
// } else {
//     var food = temp;
// }

$(function () {
    $("button").on("click", function () {
        var id = $(this).attr("data-id");

        let cat = parseInt(id[0]);

        switch (cat) {
            case 0:
                $.getJSON("../JSON/fchicken.json", (result) =>
                    cardAppend(result, "cat1", i)
                );
                break;
            case 1:
                break;
            case 2:
                break;
        }

        console.log(cat);
    });
});

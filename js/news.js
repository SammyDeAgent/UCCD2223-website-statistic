$(function () {
    $("#slide-wrapper").hide();

    let api = `https://gnews.io/api/v3/search?q=covid&token=6bedae14994202f554f561ea1f63e4a8`;

    $.getJSON(api, function (response) {
        let w = document.querySelectorAll(".carousel-item");
        let x = document.querySelectorAll(".carousel-item > div > h5");
        let y = document.querySelectorAll(".carousel-item > div > p");
        let z = document.querySelectorAll(".carousel-item > div > a");

        for (let i = 0, j = 0; i < 3; j++) {
            if (response.articles[j].image != null) {
                w[i].style.backgroundImage = `url(${response.articles[j].image})`;
                x[i].innerHTML = response.articles[j].title;
                y[i].innerHTML = response.articles[j].description;
                z[i].setAttribute("href", response.articles[j].url);
                i++;
            }
        }
        $("#slide-wrapper").show();
    });
});

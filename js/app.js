$(document).ready(function () {
    //Theme Changer
    if (typeof Storage !== "undefined") {
        var styling = JSON.parse(localStorage.getItem("BS_Style"));
        if (styling == null || styling == "undefined")
            $("#csstheme").attr("href", "css/bootstrap-united.css");
        else $("#csstheme").attr("href", styling.style);
    }
    $("#style01").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-darkly.css");
        styling = JSON.stringify({ style: "css/bootstrap-darkly.css" });
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style02").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-united.css");
        styling = JSON.stringify({ style: "css/bootstrap-united.css" });
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style03").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-solar.css");
        styling = JSON.stringify({ style: "css/bootstrap-solar.css" });
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style04").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap.css");
        styling = JSON.stringify({ style: "css/bootstrap.css" });
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });

    //Default Action
    $("#gSignInWrapper").show();
    $("#infoWrapper").hide();
    $("#cartWrapper").removeClass("d-flex").addClass("d-none");

    //Menu Card JSON Parse
    for (let i = 0; i < 3; i++) {
        var catjson = null;
        switch (i) {
            case 0:
                $.getJSON("../JSON/fchicken.json", (jd) =>
                    cardAppend(jd, "cat1", i)
                );
                break;
            case 1:
                $.getJSON("../JSON/burger.json", (jd) =>
                    cardAppend(jd, "cat2", i)
                );
                break;
            case 2:
                $.getJSON("../JSON/coffee.json", (jd) =>
                    cardAppend(jd, "cat3", i)
                );
                break;
        }
    }

    function cardAppend(data, header, k) {
        $("#" + header).after(
            '<div class="container-fluid mt-2 mb-5">' +
                '<div id="' +
                header +
                "row" +
                '" class="row mb-3"></div></div>'
        );
        for (let i = 0; i < data.length; i++) {
            $("#" + header + "row").append(
                '<div class="col d-flex justify-content-around mt-3 mb-3">' +
                    '<div class="flip-card">' +
                    '<div class="flip-card-inner">' +
                    '<div class="flip-card-front">' +
                    '<img src="' +
                    data[i].imgsrc +
                    '" alt="food image" style="width: 100%;height: 100%;">' +
                    "</div>" +
                    '<div class="flip-card-back bg-dark p-3">' +
                    '<h3 class="mt-4">' +
                    data[i].name +
                    "</h3>" +
                    "<p>" +
                    data[i].desc +
                    "</p>" +
                    "" +
                    '<div class="fixed-bottom text-center mt-4"><p>Price: RM' +
                    data[i].price +
                    '</p><button type="button" class="m-2 btn btn-outline-primary mt-2 mb-4 add-cart" data-id="' +
                    data[i].id +
                    '">Add to Cart</button></div>' +
                    "</div></div></div></div>"
            );
        }
    }
});

//Google Profile Accesor
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.

    $("#userImg").attr("src", profile.getImageUrl());
    $("#userName").html(profile.getFamilyName());

    $("#modalImg").attr("src", profile.getImageUrl());
    $("#modalID").html(profile.getId());
    $("#modalName").html(profile.getName());
    $("#modalEmail").html(profile.getEmail());

    $("#gSignInWrapper").hide();
    $("#infoWrapper").show();
    $("#cartWrapper").addClass("d-flex").removeClass("d-none");

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    $("#modalToken small").html(id_token);
    console.log("ID Token: " + id_token);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log("User signed out.");
        window.location.href = "index.html";
    });
}

// Google Login Button
function GBtnWidth() {
    if ($(window).width() < 975) {
        // $(".abcRioButton").css("width", $("#navbar").width());
        return $("#navbar").width();
    } else {
        // $(".abcRioButton").css("width", "200");
        return 200;
    }
}

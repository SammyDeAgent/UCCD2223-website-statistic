$(function () {
    //Theme Changer
    if (typeof Storage !== "undefined") {
        var styling = localStorage.getItem("BS_Style");
        if (styling == null)
            $("#csstheme").attr("href", "css/bootstrap-united.css");
        else $("#csstheme").attr("href", styling);
    }
    $("#style01").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-darkly.css");
        styling = "css/bootstrap-darkly.css";
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style02").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-united.css");
        styling = "css/bootstrap-united.css";
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style03").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap-solar.css");
        styling = "css/bootstrap-solar.css";
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });
    $("#style04").on("click", function (event) {
        $("#csstheme").attr("href", "css/bootstrap.css");
        styling = "css/bootstrap.css";
        if (typeof Storage !== "undefined")
            localStorage.setItem("BS_Style", styling);
    });

    //Default Action
    $("#gSignInWrapper").show();
    $("#infoWrapper").hide();
    $("#cartWrapper").removeClass("d-flex").addClass("d-none");
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

$(function () {
    $("#calc").click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(calcDistance, showError);
        } else {
            $("#distance").html(
                "Geolocation is not supported by this browser."
            );
        }
    });
});

function calcDistance(position) {
    let stallLat = 5.4321722;
    let stallLon = 100.3848102;
    const RAD = 6371;

    var userLoc = {};
    userLoc.lat = position.coords.latitude;
    userLoc.lon = position.coords.longitude;

    localStorage.setItem("userLoc", JSON.stringify(userLoc));

    let dLat = ((userLoc.lat - stallLat) * Math.PI) / 180.0;
    let dLon = ((userLoc.lon - stallLon) * Math.PI) / 180.0;

    userLoc.lat = (userLoc.lat * Math.PI) / 180.0;
    stallLat = (stallLat * Math.PI) / 180.0;

    let a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) *
            Math.cos(userLoc.lat) *
            Math.cos(stallLat);
    let c = 2 * Math.asin(Math.sqrt(a));

    let res = RAD * c;
    let message;

    if (res < 25) {
        message = "You are less than 20KM away. Come visit us tonight.";
    } else if (res < 50) {
        message =
            "You are less than 50KM away. Leave early and come have dinner with us.";
    } else if (res < 100) {
        message =
            "You are less than 100KM away. You might need to start your journey an hour earlier.";
    } else if (res < 250) {
        message =
            "You are less than 250KM away. You might need to cross the border to visit us.";
    } else if (res < 1000) {
        message =
            "You are are quite far away. Thank you for showing interest in our humble stall.";
    } else {
        message = "Greetings to you, Mr. Worldwide.";
    }

    $("#distance").html(message);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            $("#distance").html("You Denied The Request For Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#distance").html("Location Information Is Unavailable.");
            break;
        case error.TIMEOUT:
            $("#distance").html("The Request to Get User Location Timed Out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#distance").html("An Unknown Error Occurred.");
            break;
    }
}

var gapiPromise = (function () {
    var deferred = $.Deferred();
    window.onLoadCallback = function () {
        deferred.resolve(gapi);
    };
    return deferred.promise()
}());

var authInited = gapiPromise.then(function () {
    gapi.auth2.init({
        client_id: '505338635145-4r3f4cbq31r2nl60gfqjk7d473naarqb.apps.googleusercontent.com'
    });
})

//gapiPromise.then(function(){ ... }) - function inside will be execueted when gapi is loaded


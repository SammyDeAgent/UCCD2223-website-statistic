var gapiPromise = (function () {
    var deferred = $.Deferred();
    window.onLoadCallback = function () {
        deferred.resolve(gapi);
    };
    return deferred.promise()
}());

var authInited = gapiPromise.then(function () {
    gapi.auth2.init({
        client_id: '505338635145-8fgfrtunnk4r8f673oc21s6blp10e774.apps.googleusercontent.com'
    });
})

//gapiPromise.then(function(){ ... }) - function inside will be execueted when gapi is loaded


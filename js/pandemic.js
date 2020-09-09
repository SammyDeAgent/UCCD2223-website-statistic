var settings = {
    url: "https://api.covid19api.com/total/country/malaysia",
    method: "GET",
    timeout: 0,
};

$.ajax(settings).done(function (response) {
    let i = response.length - 1;

    let cou = response[i].Country;
    let con = response[i].Confirmed;
    let dea = response[i].Deaths;
    let rec = response[i].Recovered;
    let act = response[i].Active;
    let dat = response[i].Date;
});

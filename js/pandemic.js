var settings = {
    url: "https://api.covid19api.com/total/country/malaysia",
    method: "GET",
    timeout: 0,
};

$(function () {
    $.ajax(settings).done(function (response) {
        let i = response.length - 1;

        let cou = response[i].Country;
        let con = response[i].Confirmed;
        let dea = response[i].Deaths;
        let rec = response[i].Recovered;
        let act = response[i].Active;
        let yea = response[i].Date.substring(2, 4);
        let day = response[i].Date.substring(8, 10);
        let mon = response[i].Date.substring(5, 7);

        let dat = day + "-" + mon + "-" + yea;

        $("table #coun").html(cou);
        $("table #conf").html(con);
        $("table #deat").html(dea);
        $("table #reco").html(rec);
        $("table #acti").html(act);
        $("table #date").html(dat);
    });
});

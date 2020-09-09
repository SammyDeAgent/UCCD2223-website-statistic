$(document).ready(function () {
    //Adding To Cart
    $("#cardMenuWrapper").on("click", "button", () => {
        updateCount($(this)[0].activeElement.attributes["data-id"].nodeValue);
    });
});

function updateCount(id) {
    var locate = false;
    var profile = auth2.currentUser.get().getBasicProfile();
    var record = localStorage.getItem(profile.getId());
    if(record == null){
        record = [];
    }

    for(let i = 0; i < record.length; i++){
        if(record[i][0] == id){
            record[i][1].count++;
            locate = true;
        }
    }
    if(!locate){
        record.push([id,1]);
    }

    localStorage.setItem(profile.getId(),record);
}

// function setCount() {
//     let i = parseInt(localStorage.getItem("tCount"));
//     i ? $("#cartNumber").html(i) : $("#cartNumber").html(0);
// }

// setCount();

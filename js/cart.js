
$(document).ready(function(){

    //Adding To Cart
    $("#cardMenuWrapper").on('click','button',()=>{
        console.log($(this)[0].activeElement.attributes["data-id"].nodeValue);
    });
})
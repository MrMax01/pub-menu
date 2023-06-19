$(document).ready(function() {

    $(".js-cocktails-button").click(function(){
        $(".js-cocktails-list").slideToggle(900);
    });

});
  
function hundleArrow(){
    const flag = document.querySelector('.down');
    if(flag){
        document.querySelector('.arrow-up').innerHTML = ' <ion-icon name="chevron-up-outline"></ion-icon>';
    }else{
        document.querySelector('.arrow-up').innerHTML = '<ion-icon name="chevron-down-outline" class="down"></ion-icon>'
    }
}
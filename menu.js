$(document).ready(function() {

    $(".js-toggle-button").click(function() {
        var target = $(this).data("target");
        $(target).slideToggle(900);
      });
      
});

  
function hundleArrow(down, arrowUp){
    const selector = down.slice(1);
    

    const flag = document.querySelector(down);
    if(flag){
        document.querySelector(arrowUp).innerHTML = ' <ion-icon name="chevron-up-outline"></ion-icon>';
    }else{
        document.querySelector(arrowUp).innerHTML = '<ion-icon name="chevron-down-outline" class='+selector+'></ion-icon>';
    }
}
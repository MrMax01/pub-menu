$(document).ready(function() {
    /*CLASSIC COCKTAILS*/
    $(".js-cocktails-button").click(function(){
        $(".js-cocktails-list").slideToggle(900);
    });

    /* SOFT DRINKS */
    $(".js-softDrink-button").click(function(){
        $(".js-softDrink-list").slideToggle(900);
    });

    /* DRINKS */
    $(".js-drink-button").click(function(){
        $(".js-drink-list").slideToggle(900);
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
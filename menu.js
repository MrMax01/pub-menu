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




/*Carico il menu dal file json*/
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    // Utilizza l'oggetto JSON ottenuto
    //console.log(data);
    data.forEach( element => {
        const section = document.getElementById(element.id);

        element.title.forEach((value, num)=>{
             const html = `<h4>${value}</h4>
            <p>${element.content[num] || ''}</p>
            <hr>`;
            section.innerHTML += html;  
        });
    });

  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });

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




/* PROVA */
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    // Utilizza l'oggetto JSON ottenuto
    //console.log(data);
    data.menu.forEach(div => {
        const section = document.getElementById(div.category.name);
        
        div.category.item.forEach((line) => {
            const html = `<h4>${line.title}</h4>
            <p>${line.content}</p><hr>`;

            section.innerHTML += html;
        });
        
    });

  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });

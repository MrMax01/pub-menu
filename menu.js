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

        /*
        data è un array di oggetti = {
            id,
            titile: [],
            content: [],
        }
        */
        const section = document.getElementById(element.id);

        element.title.forEach((value, num)=>{
            /*
            -salvo l'html che inserirò nel div id = element.id
            -  ogni titolo  verrà accostato in html con ogni content della medesima posizione
            - se il content associato al titolo non c'è,  verrà messa una stringa vuota
            */
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

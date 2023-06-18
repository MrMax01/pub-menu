function openCloseCockatails(){
    const divList = document.querySelector('.js-cocktails-list').innerHTML;
    let html = '';
    
    if(divList.trim() === '' || divList === '<span class="fade-out"></span>'){
        html = '<h4 class="dropdown-content">Negroni</h4> <p class="dropdown-content">bitter, qualcosa, qualcosa, qualcosa</p>';
        document.querySelector('.js-cocktails-list').innerHTML= html;
    }else{
        html= '<span class="fade-out"></span>';
        document.querySelector('.js-cocktails-list').innerHTML = html;
    }
}


function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
  }
  
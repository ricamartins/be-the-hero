$(document).ready(function(){
	
    $(".form-group .form-control").blur(function(){
         if($(this).val()!=""){
             $(this).siblings("label").addClass("active");
         }else{
              $(this).siblings("label").removeClass("active");
         }
    });
      
      
      
  });

  
  /* Botão Voltar ao topo com deslize suave */

$(document).ready(function(){
     $(window).scroll(function(){
         if ($(this).scrollTop() > 100) {
             $('#btnTopo').fadeIn();
         } else {
             $('#btnTopo').fadeOut();
         }
     });
 
     $('#btnTopo').click(function(){
         $('html, body').animate({scrollTop : 0},'slow');
         return false;
     });
 });


 /*scrol suave para links internos 
 quando clicar num elemento a dentro de nav farei a seguinte função*/

 $('nav a').click(function(e){
    e.preventDefault();
    var itemClicado = $(this).attr('href');
        targetOffset = $(itemClicado).offset().top; 
    $('html,body').animate({
        scrollTop: targetOffset
    },500);
 });


/*Validações formulário de contato */

function selectId(id) {
    return document.getElementById(id);
}

function empty(input) {
    return input.value.trim() === "";
}

function errorMessage (message) {
    errorListUl.innerHTML += "<li>" + message + "</li>";
}


let form = selectId('formulario');
let nome  = selectId('nome');
let email  = selectId('email');
let mensagem  = selectId('mensagem');
let uf = selectId('uf');
let city = selectId('city');

let errorListUl = document.querySelector('#error-list ul');
let errorList = selectId('error-list');

form.addEventListener("submit", function (ev){

    errorListUl.innerHTML = '';

    if (empty(nome)){
        errorMessage("Campo <b>nome</b> não preenchido");
    }

    if (empty(email)){
        errorMessage("Campo <b>email</b> não preenchido");
    }


    if (empty(mensagem)){
        errorMessage("Campo <b>mensagem</b> não preenchido");
    }

    
    if (empty(uf)){
        errorMessage("Campo <b>uf</b> não selecionado");
    }

    if (empty(city)){
        errorMessage("Campo <b>cidade</b> não selecionado");
    }

    if (errorListUl.querySelectorAll('li').length > 0){
        ev.preventDefault();
        errorList.hidden = '';
    }


});


/*form estado/cidade */

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( states => {

        for ( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()


function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedValue = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedValue].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then( res =>  res.json() )
    .then( cities => {

        for ( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}



/*quando ocorrer uma mudança ele executará a função getcities */
document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
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

    if (errorListUl.querySelectorAll('li').length > 0){
        ev.preventDefault();
        errorList.hidden = '';
    }


});
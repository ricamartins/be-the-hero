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
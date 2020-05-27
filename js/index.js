$(document).ready(function(){
	
    $(".form-group .form-control").blur(function(){
         if($(this).val()!=""){
             $(this).siblings("label").addClass("active");
         }else{
              $(this).siblings("label").removeClass("active");
         }
    });
      
      
      
  });
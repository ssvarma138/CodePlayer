function updateOutput(){
            $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+ $("#csspanel").val() +"</style></head><body>"+ $("#htmlpanel").val() +"</body></html>");
        document.getElementById("outputpanel").contentWindow.eval($("#jspanel").val()); 
    
        }
      
      $(".togglebutton").hover(function(){
          
          $(this).addClass("highlight");
         
          
      },function(){
          $(this).removeClass("highlight");
         
      });
     $(".togglebutton").click(function(){
         $(this).toggleClass("active");
         $(this).removeClass("highlight");
         var panelId = $(this).attr("id")+"panel";
         $("#"+panelId).toggleClass("hidden");
         var numOfActivePanels =4- $('.hidden').length;
       //  alert($('.hidden').length);
         $(".panel").width($(window).width()/numOfActivePanels-10);
     });
    $(".update").on('change keyup paste',function(){
        
      updateOutput();
    });
    updateOutput();
   $(".panel").height($(window).height()-$("#header").height()-20);
   $(".panel").width($(window).width()/2-10);
    
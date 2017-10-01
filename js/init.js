$(document).ready(function() {
    "use strict";
 
    /**************************************************************************
                 SKILL BAR 
    **************************************************************************/

    $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        .empty()
        .append('<i class="fa fa-circle"></i>');                
    });

    /**************************************************************************
        WOW INIT
    **************************************************************************/

    var wow = new WOW({ mobile: false });
    wow.init();

    /**************************************************************************
       Projects
    **************************************************************************/
    
    $("div.btn-work").click(function () {
      var $group_name = $(this);
      var $group = $($group_name.attr("value"));
      // expand
      if ($group.is(":visible")) {
          $group.hide("slow");
          $group_name.toggleClass("rotate");
      }
      // collapse
      else {
          $group.show("slow");
          $group_name.toggleClass("rotate");
      }
    });

    /**************************************************************************
            Style language
    **************************************************************************/

    $('.cv-language-switch').click(function(){
        if($(this).hasClass('open')){
          $(this).removeClass('open');
          $('#switch-language').animate({'right':'0'});
        }else{
          $(this).addClass('open');
          $('#switch-language').animate({'right':'-300'});
        }
    });

});

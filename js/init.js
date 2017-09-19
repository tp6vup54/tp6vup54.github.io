$(document).ready(function() {
    "use strict";

    /***************************************************************************/
            /* NAVIGATION  */
    /***************************************************************************/
   
      $('.button-collapse').sideNav();
 
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
            Style demo
    **************************************************************************/
   
    $('.cv-style-switch').click(function(){
        if($(this).hasClass('open')){
          $(this).removeClass('open');
          $('#switch-style').animate({'right':'0'});
        }else{
          $(this).addClass('open');
          $('#switch-style').animate({'right':'-300'});
        }
    });

  
    /**************************************************************************
             BLOG POST 
    **************************************************************************/
  
    jQuery(window).on('load', function(){ var $ = jQuery;
        $('.blog').masonry({
          itemSelector: '.blog-post',
          columnWidth: '.blog-post',
          percentPosition: true
        });
    });


    var height = $('.caption').height();
        if($(window).width()){
          $('#featured').css('height', height);   
          $('#featured img').css('height', height);   
        }


    /*************************************************************************
                TOOLTIP
    **************************************************************************/
    $('.tooltipped').tooltip({delay: 50});

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
      var $group = $('.' + $group_name.attr("value"));
      // expand
      if ($group.is(":visible")) {
          $group.hide(100);
          $group_name.toggleClass("rotate");
          
      }
      // collapse
      else {
          $group.show("slow");
          $group_name.toggleClass("rotate");
      }
    });

});

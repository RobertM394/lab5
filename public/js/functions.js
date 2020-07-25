/* global $ */

$(document).ready(function(){ 
   /*Event when clicking on any favorite icon
   icon swaps from empty to filled */
   
   
   $(".favoriteIcon").on("click", function(){ 

      if ($(this).attr("src") == "img/favorite.png") {
          $(this).attr("src","img/favorite_on.png");
      } 
      else {
          $(this).attr("src","img/favorite.png");
      }
      
   });//favoriteIcon
   
});
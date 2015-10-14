$(document).ready(function () {

  animationHover("#facebook", "bounce")
  animationHover("#twitter", "bounce")
  animationHover("#google-plus", "bounce")
  animationHover("#tel", "bounce")
  
  // Animate on Hover Function
  function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 500);         
        });
  }
})
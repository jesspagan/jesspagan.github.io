$(window).scroll(function(){

	/* Check the location of each desired element */
        $('.fader').each( function(i){
            
            a = $(this).offset().top + $(this).height();
        	b = $(window).scrollTop() + $(window).height()/3;
        	if (a < b) {
        		if ($(this).css('opacity')==1) $(this).fadeTo(800,0);
        	}
        	else {
        		if ($(this).css('opacity')==0) $(this).fadeTo(800,1);
        	}
        }); 
  });
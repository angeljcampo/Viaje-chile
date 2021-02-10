$(function(){

    $("a").click(function(event){
        if(this.hash !=="") {
            event.preventDefault();

            var viajes = this.hash;
            $("html,body").animate({
                scrollTop: $(viajes).offset().top
            }, 800, function(){
                window.location.hash=viajes;
            });
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > 40) {
            $(".navbar").addClass("navdark");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("navdark");
        }
    });

    $('[data-toggle="popover"]').popover()

});;
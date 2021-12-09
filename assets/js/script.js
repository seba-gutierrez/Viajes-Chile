$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 200
            },
            800
        )
    });

    $('[data-toggle="tooltip"]').tooltip();

});

$(document).ready(function(){  
	$("#ocultar-1").click(function () {
        $('p').toggle("slow");
    });
    
    $("#ocultar-2").click(function () {
        $('p').toggle("slow");
    });
    $("#ocultar-3").click(function () {
        $('p').toggle("slow");
    });
    $("#ocultar-4").click(function () {
        $('p').toggle("slow");
    });



});

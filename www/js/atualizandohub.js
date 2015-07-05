$(document).ready(function(){
	$(".formatualizado").hide();
	$(".next").hide(); 
	$('.back').click(function () {return false;});
	carregarBarraProgresso();
});

function carregarBarraProgresso(){
   // $("#botao").hide();
    //$("#page008a #direita").hide();
    
    var value = $("#barraprogresso").attr('value');
    
    if(value > 0){
        $("#barraprogresso").attr('value', 0);
    }
    
    for(var x = value; x <= 100; x++){
       carregar(x, value);
    }
     
}

function carregar(x, valorAtualProgress){
    var valuetemp;
    
    setTimeout(function(){
        valuetemp = valorAtualProgress + x;
        $("#barraprogresso").attr('value', valuetemp);
        $("#barraprogresso").innerHTML = valuetemp + "%";
        
        if(valuetemp == 100){
            $('.formProgress').fadeOut(1000).hide();/*o seletor anterior era a class **form** mas ela faz uma parte importante com os componentes da tela, e por isso substitui o seletor no Jquery e add outra classe no html */
    		$(".formatualizado").fadeIn(1000).show();
    		$(".next").fadeIn(1000).show(); 
    		$('.back').unbind('click');
        }
    }, 50*x);
}

function previousPage(){
	window.location.href='conectar_hub.html';
}

function nextPage(){
	window.location.href='finalizado.html';
}

function getUrlParameter(sParam){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == sParam) {
            return pair[1];
        }
    }
    return "";
} 

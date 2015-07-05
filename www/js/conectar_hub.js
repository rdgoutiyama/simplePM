var img;
var idControlador;
var cadastro;
var objcadastro;

$(document).ready(function(){
    cadastro = localStorage.getItem('cadastro');
    objcadastro = JSON.parse(cadastro);
	invalidar(); 
	img = objcadastro.imagem; 
});

 
function invalidar(){
	$('.next').hide();
	$('#btn_confirmar').css('background-color', '#666');
	$('#btn_confirmar').click(function () {return false;});
}

function validar(){
	$('.next').show(); 
	$('#btn_confirmar').css('background-color', '#4f5477');
	$('#btn_confirmar').unbind('click');
}

function previousPage(){
	window.location.href='localizacao.html';
}

function nextPage(){
   window.location.href='teste.html';
//	if(verificarCampo()){
//
//        var controladores;
//    
//        $.ajax({
//            url: 'http://192.168.1.4/validacao_php/funcaoListarControlador.php',
//            type: 'post',
//            success: function(ret){
//                controladores = jQuery.parseJSON(ret);
//            },
//            async: false
//        });
//        
//        var idCon = -1;
//        
//        for(var i=0; i<controladores["to"].length; i++){
//            if(controladores["to"][i]["localControlador"]["idLocal"] == -1){
//                if(controladores["to"][i]["etiquetaControlador"] == $('#codigo').val()){
//                    idCon = controladores["to"][i]["idControlador"];
//                }
//            }
//        }
//        
//        if(idCon != -1){
//            objcadastro.idControlador = idCon;
//            localStorage.setItem('cadastro', JSON.stringify(objcadastro)); 
//            window.location.href='atualizando.html';
//        }else{
//            alert('Etiqueta inválida.');
//        }
//	}
}

function verificarCampo(){
	if(checkInput()){
		validar();
		return true;
	}else{
		invalidar();
		return false;
	}
}

function checkInput(){
	if($('#codigo').val() == ''){
		return false;
	}
	return true;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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

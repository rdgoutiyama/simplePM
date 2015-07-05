$(document).ready(function(){
	invalidarAvanco();
});

function inputOnChange(){
	validarCadastro();
}

function validarCadastro(){ 
	if(validarEmail() && validarSenha() && validaSemPreenchimento()){
		validarAvanco();
		return true;
	}
	invalidarAvanco();

	return false;
}

function validarEmail(){
	if($('#usr_email').val() == $('#usr_email_confirm').val()){
		return true;
	}

	invalidarAvanco();
}

function validarSenha(){
	if($('#usr_senha').val() == $('#usr_senha_confirm').val()){
		return true;
	}
	invalidarAvanco();
}

function validaSemPreenchimento(){
	if( $('#usr_nome').val() 		 != '' &&
		$('#usr_email').val() 		 != '' &&
		$('#usr_email_confirm').val() != '' &&
		$('#usr_senha').val() 		 != ''  &&
		$('#usr_senha_confirm').val() != '' )
	{
		return true;
	}
	invalidarAvanco();
}

function invalidarAvanco(){
	$('.next').hide();
	$('.btn_ok').css('background-color', '#666');
	$('.btn_ok').click(function () {return false;});
}
function validarAvanco(){
	$('.next').show();
	$('.btn_ok').unbind('click');
	$('.btn_ok').css('background-color', '#4f5477');
}


/* Controle de página */
function nextPage(){
	if(validarCadastro()){

		var cadastro = new Object();
		cadastro.nome = $("#usr_nome").val();
		cadastro.senha = $("#usr_senha").val(); 
		cadastro.email = $("#usr_email").val();
       	localStorage.setItem('cadastro', JSON.stringify(cadastro));
		window.location.href='bem_vindo.html';
	}
    
}

function previousPage(){
	window.location.href='index.html';
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



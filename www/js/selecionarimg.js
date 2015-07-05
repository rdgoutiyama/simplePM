var isSelectedPhoto = false;
var url;

$('#container_crop').on("click", function() {
    $('.form').fadeIn(1000).show();
});

/* Controle de página */
function nextPage(){
    var cadastro = localStorage.getItem('cadastro');
    var objcadastro = JSON.parse(cadastro);
     $("#temp").html(objcadastro.nome);
	if(isSelectedPhoto == true){
	    objcadastro.imagem = url;
        localStorage.setItem('cadastro', JSON.stringify(objcadastro)); 
        window.location.href = "crop.html?iscrop=true"; 
    }else{
        url = "images/bg_parte1.png";
		objcadastro.imagem = "images/bg_parte1.png";
        localStorage.setItem('cadastro', JSON.stringify(objcadastro)); 
        window.location.href='localizacao.html?iscrop=false';
    }   
}

function previousPage(isSelectedPhoto){
	window.location.href='bem_vindo.html';
}

$(document).ready(function(){
    $(".form").hide();
});

function btnCancelar(){
    $('.form').fadeIn(1000).hide();
    if(isSelectedPhoto){
        isSelectedPhoto = false;
        
        $("#div_crop_imagem").empty();
        $("#div_crop_imagem").append(
            "<figure class='figure-align'>" + 
                "<div id='icon_foto'>"+                            
                    "<img src='images/icon_photo.png'>" +
                "</div>" +
            "<p id='subtitulo_icon'>Personalizar Imagem de Fundo</p></figure>");
            
        
        //document.getElementById("img_camera").setAttribute("src", 'images/icon_photo.png'); 
    }else{
        document.getElementById("#icon_foto img").setAttribute("src", '../images/icon_photo.png'); 
    }
}

$("#tirar_foto").on('click', function captureCamera(){
    intel.xdk.camera.takePicture(10,true,"jpg");
});

/** Funções de camera **/


function importLibrary()
{ 
    intel.xdk.camera.importPicture();
}

document.addEventListener("intel.xdk.camera.picture.add",function(event){
    var name = event.filename;

    url = intel.xdk.camera.getPictureURL(name);
    var alturaTemporariaDivCropImagem = $("#div_crop_imagem").height();
    var larguraTemporariaDivCropImagem = $("#div_crop_imagem").width(); 

    $("#div_crop_imagem").empty();
    $("#div_crop_imagem").append("<img id='img_camera' />");        
    $("#img_camera").css('width', larguraTemporariaDivCropImagem);
    $("#img_camera").css('height', alturaTemporariaDivCropImagem);
    document.getElementById("img_camera").setAttribute("src", url); 
    isSelectedPhoto = true;
});

$("#abrir_galeria").on('click',function(){
    importLibrary();
});

function sendParameters(){
    var url = $("#img_camera").attr('src'); 
    window.location.href = "../crop.html?img=" + url; 
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

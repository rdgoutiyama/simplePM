var img;
var contextCanvas;
var cadastro;
var objcadastro;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){ 
    //$('.ui-page-theme-a').css('background', 'url('+img+')');
    $('.ui-page-theme-a').css('background-image', 'url(images/bg_parte1.png)'); 

    cadastro = localStorage.getItem('cadastro');
    objcadastro = JSON.parse(cadastro);
    img = objcadastro.imagem;
 
    //$('.ui-page-theme-a').css('background', 'url('+img+')'); 
    $('#img_crop').attr('src',img);
    
    //carregar imagem ao canvas:
    canvas = document.getElementById('img_crop_canvas');
    widthCanvas = canvas.width;
    heightCanvas = canvas.height;
    
    contextCanvas  = canvas.getContext('2d');
    imagemCanvas = new Image();
    
    imagemCanvas.src = img;
    imagemCanvas.onload = function(){
        contextCanvas.drawImage(imagemCanvas,0,0, widthCanvas, heightCanvas);
        $("#img_crop_canvas").hide();
        imagemCanvasAsImage = new Image();
        imagemCanvasAsImage.src = canvas.toDataURL();
    }
    $('#img_crop').css('height', heightCanvas);
    $('#img_crop').css('width', widthCanvas);

    $('#img_crop').Jcrop({
        aspectRatio: 1,
        onSelect: updateCoords,
        onChange: updateCoords
    });
    
});

function nextPage(){
    window.localStorage.setItem('cadastro', JSON.stringify(objcadastro));
	window.location.href="localizacao.html?iscrop=true&img="+img;
}

function previousPage(){
	window.location.href="selecionar_img.html";
}
    
function updateCoords(c)
{
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
    
    var ctx = canvas.getContext('2d');
    var imgt = new Image();
    imgt.src = imagemCanvasAsImage.src;
    imgt.onload = function(){
        ctx.drawImage(imagemCanvasAsImage, c.x, c.y, c.w, c.h, 0, 0, widthCanvas, heightCanvas);
    }
}

function checkCoords()
{
    if (parseInt($('#w').val())){
        var x = $('#x').val();
        var y = $('#y').val();
        var w = $('#w').val();
        var h = $('#h').val();  

        var rx = 100 / w;
        var ry = 100 / h;

    
        //$("#mainpage").css('background', 'url('+$("#img_crop").attr("src") +')'); 
        return true;
    }
   

    alert('Selecione a área para recorte.');
    return false;
}

function recortar(){ 
    objcadastro.imagem = canvas.toDataURL();
    $('.ui-page-theme-a').css('background', "url('"+canvas.toDataURL()+ "')");     
}
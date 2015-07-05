 /* Controle de página */
function nextPage(){
	window.location.href='selecionar_img.html';
}

function previousPage(){
	window.location.href='cadastro.html';
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

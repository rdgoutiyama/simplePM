var isCropPage = false;
var longFinal;
var latFinal;
var cadastro;
var objcadastro;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
 
$(document).ready(function(){
    cadastro = localStorage.getItem('cadastro');
    objcadastro = JSON.parse(cadastro); 
    $('.ui-page-theme-a').css('background-image', "url("+objcadastro.imagem+ ")");  
 

    iniciarGPS();
    isCropPage = getParameterByName('iscrop'); 
   

    //$('ui-page-theme-a').css('background', 'url("'+img+'")!important');
    //$('.ui-page-theme-a').css('background', 'url('+objcadastro.imagem+')');


});   

function previousPage(){ 
	if(isCropPage === "true"){
		window.location.href='crop.html?iscrop=' + isCropPage;
	}else{
		window.location.href='selecionar_img.html?iscrop=' + isCropPage;
	}
}

function nextPage(){  
 
    window.localStorage.setItem('cadastro', JSON.stringify(objcadastro));
    window.location.href='conectar_hub.html';
}

function iniciarGPS(){
    document.addEventListener("deviceready", function(){
        navigator.geolocation.getCurrentPosition(function(position){
        objcadastro.latitude  = position.coords.longitude;
        objcadastro.longitude  = position.coords.latitude;
        
        alert(objcadastro.latitude);
        var mapProp = {center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude), zoom:50, mapTypeId:google.maps.MapTypeId.ROADMAP};
        var map=new google.maps.Map(document.getElementById("maps"), mapProp);
        var marker=new google.maps.Marker({position:new google.maps.LatLng(position.coords.latitude,position.coords.longitude)});
        marker.setMap(map);
        }, function(error){
            if(error.code == PositionError.PERMISSION_DENIED)
            {
                alert("O aplicativo não tem permissão para acessar o GPS");
            }
            else if(error.code == PositionError.POSITION_UNAVAILABLE)
            {
                alert("Nenhum GPS encontrado");
            }
            else if(error.code == PositionError.TIMEOUT)
            {
                alert("Problema de conexão");
            }
            else
            {
                alert("Ocorreu um erro desconhecido");
            }
        }, { maximumAge: 3000, timeout: 30000, enableHighAccuracy: true });
    }, false);
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


function drawMap(){
        var latlng = new google.maps.LatLng(currentLatitude,currentLongitude);
        var mapOptions = {
            zoom:10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoomControl: true,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle.SMALL,
              position: google.maps.ControlPosition.LEFT_TOP
            },
        };

        if (boolTripTrack==true)
        {
            _map = new google.maps.Map(document.getElementById("maps"), mapOptions);
        }
} 
 




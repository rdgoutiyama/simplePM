
$(document).ready(function(){
    var idLocal = -1;
    var idUsuario = -1;
    
    var cadastro = localStorage.getItem('cadastro');
    var objcadastro = JSON.parse(cadastro);
    
    //A PARTIR DE AGORA, APENAS RECUPERE O VALOR PELO OBJETO  'objcadastro';
    

    //insert local
    $.ajax({
        url: 'http://192.168.1.4/validacao_php/funcaoInserirLocal.php',
        type: 'post',
        data:{
            local_id: 0,

            //teste:
            local_usuarioPri  : objcadastro.nome,
            local_usuarioPass : objcadastro.senha,
            local_usuarioEmail : objcadastro.email
            //local_usuarioPri: getUrlParameter('usuario').toString(),
            //local_usuarioPass: getUrlParameter('password').toString(),
            //local_usuarioEmail: getUrlParameter('email').toString()
        },
        success: function(ret){
            idLocal = ret;
        },
        async: false
    });
    
    if(idLocal > 0){
        //insert usuario
        $.ajax({
            url: 'http://192.168.1.4/validacao_php/funcaoInserirUsuario.php',
            type: 'post',
            data:{
                usr_id: 0,
                local_id: idLocal,
                
                //teste:
                usr_nome: objcadastro.nome,
                usr_senha:  objcadastro.senha,
                usr_email: objcadastro.email

                //usr_nome: getUrlParameter('usuario'),
                //usr_senha: getUrlParameter('password'),
                //usr_email: getUrlParameter('email')
            },
            success: function(ret){
                idUsuario = ret;
            },
            async: false
        });

        if(idUsuario > 0){
            
            var obj;
            
            //retrive controlador
            $.ajax({
                url: 'http://192.168.1.4/validacao_php/funcaoRetornarControlador.php',
                type: 'post',
                data:{
                    //teste
                    ctrl_id : objcadastro.idControlador;
                    //ctrl_id: getUrlParameter('idCon')
                },
                success: function(ret){
                    obj = jQuery.parseJSON(ret);
                },
                async: false
            });

            //teste
            //if(obj["idControlador"] == getUrlParameter('idCon')){
            if(obj["idControlador"] == objcadastro.idControlador){    
                
                //update controlador
                $.ajax({
                    url: 'http://192.168.1.4/validacao_php/funcaoAlterarControlador.php',
                    type: 'post',
                    data:{
                        local_id: idLocal,
                        ctrl_id: obj["idControlador"],
                        ctrl_hw: obj["versaoHWControlador"],
                        ctrl_mac: obj["macControlador"],
                        ctrl_etiqueta: obj["etiquetaControlador"],
                        ctrl_nome: obj["nomeControlador"],
                        ctrl_ip: obj["ipControlador"],
                        ctrl_udp: obj["udpControlador"],
                        ctrl_tcp: obj["tcpControlador"],
                        ctrl_versao: obj["versaoFWControlador"],
                        ctrl_idzigbee: obj["idZigbeeControlador"],
                        ctrl_idzwave: obj["idZwaveControlador"],
                        ctrl_iccid: obj["iccidControlador"],
                        ctrl_iccidphone: obj["iccidPhoneControlador"]
                    },
                    success: function(ret){

                    },
                    async: false
                });
            }
            
        }
        
    }
    
});

function previousPage(){ 
	window.location.href='atualizando.html';
}

function nextPage(){ 
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

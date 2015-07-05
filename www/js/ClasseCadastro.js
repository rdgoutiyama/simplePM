function ClasseCadastro(){

	var nome;
	var email;
	var senha;
	var imagem;
	var latitude;
	var longitude;
	var idControlador;



	var getIdControlador = function(){
		return this.idControlador;
	}

	var setIdControlador = function(AIdControlador){
		this.idControlador = AIdControlador;
	}

	var getLongitude = function(){
		return this.latitude;
	}

	var setLongitude = function(ALongitude){
		this.longitude = ALongitude;
	}

	var getLatitude = function(){
		return this.latitude;
	}

	var setLatitude = function(ALatitude){
		this.latitude = ALatitude;
	}

	var getImagem = function(){
		return this.imagem;
	}

	var setImagem = function(AImagem){
		this.imagem = AImagem;
	}

	var getNome = function(){
		return this.nome;
	}

	var setNome = function(Anome){
		this.nome = Anome;
	}

	var getEmail = function(){
		return this.email;
	}

	var setEmail = function(AEmail){
		this.email = AEmail;
	}

	var setSenha = function(ASenha){
		this.senha = Asenha;
	}

	var getSenha = function(){
		return this.senha;
	}
}
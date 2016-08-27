angular.module('App')
.controller('MenuController', function($state, $rootScope){
	var ctrl = this;

	ctrl.menu = [	{nome: 'home', 		selecionado: true	} , 
					{nome: 'sobre', 	selecionado: false	} , 
					{nome: 'contato', 	selecionado: false 	} ];

	ctrl.entrarPagina = function(item) {
		$state.go(item.nome);
	}

	ctrl.marcarPagina = function(pagina) {
		ctrl.menu.forEach(function(itemMenu) {
			itemMenu.selecionado = (itemMenu.nome == pagina);
		});
	}

	$rootScope.$on('MudarMenu', function(evt, nomePagina) {
		ctrl.marcarPagina(nomePagina);
	})
});
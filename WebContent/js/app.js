var app = angular.module('lixo',['ngRoute','ngMessages','base64','ngCookies']);

app.run(function ($rootScope, $cookies, $http, $location, AuthAPI, $route) {

	  // Pega os dados do usuário no cookie caso exista, caso contrario é atribuido
	  // um objeto vazio.
	  $rootScope.globals = $cookies.getObject('globals') || {};
	  // Verifica se existe um usuário na sessão
	  if ($rootScope.globals.currentUser)
	    $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authData;

	  // Essa função é chamada em toda transição de view
	  $rootScope.$on('$routeChangeStart', function (event, next, current) {

	    
	    if (!AuthAPI.checkAuthForView(next))
	      $location.path('/');
	    else if (!AuthAPI.checkAuthForView(next))
	      $location.path('/mobile');
	    else if (!AuthAPI.userHasPermissionForView(next))
	      $location.path('/erro/acesso_negado');
	  });

	});
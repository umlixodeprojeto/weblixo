app.controller('Home',function ($scope, $location, AuthAPI) {
	
	var init = function () {
		$scope.logout = _logout;
	}
	
	var _logout = function () {
		AuthAPI.logout();
		$location.path('/');
	}
	
	init();
	
});
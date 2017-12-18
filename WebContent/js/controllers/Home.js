app.controller('Home',function ($scope, $location, $interval, AuthAPI, TrashAPI, trash) {
	
	var init = function () {
		$scope.logout = _logout;
		$scope.trash = trash.data;
		
		$interval(function () {
			TrashAPI.getById(1).then(function success (response) {
				$scope.trash = response.data;
			});
		},1000);
	}
	
	var _logout = function () {
		AuthAPI.logout();
		$location.path('/');
	}
	
	init();
	
});
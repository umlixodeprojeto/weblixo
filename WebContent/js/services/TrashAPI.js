app.factory("TrashAPI",function ($http) {
	
	var _getById = function (id) {
		return $http.get("http://localhost:8080/apilixo/lixeira/"+id);
	}
	
	return {
		getById: _getById
	};
});
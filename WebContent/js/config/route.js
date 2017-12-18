app.config(function ($routeProvider) {
  $routeProvider.when('/',{
    templateUrl: 'view/login.html',
    controller: 'Login'
  });
  
  $routeProvider.when('/home',{
	  templateUrl: 'view/home.html',
	  controller:'Home',
	  requiresAuthentication: true,
	  resolve: {
		  trash: function (TrashAPI) {
			  return TrashAPI.getById(1);
		  }
	  }
  });
});

app.controller('Login',function ($scope,AuthAPI, $location) {
  var init = function () {
    $scope.makeLogin = _makeLogin;
  }

  var _makeLogin =  function (user) {
    if ($scope.login.$valid) {

      AuthAPI.login(user,function (response) {
    	  user = response;
    	  
    	  if (user != null) {
    		  AuthAPI.setCredentials(user);
              $location.path("home");
    	  } else {
    		  Materialize.toast('Email ou senha incorretos',3000);
    	  }
    	  
      });
    }
  }

  init();
});

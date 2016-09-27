
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){

	console.log("hello world from AppCtrl");
	console.log($scope);
	

	var refresh = function(){
		$http.get('/REST/').success(function(response){
		console.log("I Got The Data I Requested " + response[0].customer_fisrt_name);
		$scope.customersList = response;
		$scope.cust = "";
	});
	};
	refresh();
	
	$scope.addContact = function(){
		console.log($scope.cust);
		$http.post('/REST/',$scope.cust).success(function(response){
			console.log(response);
			refresh();
		});
	}
	$scope.update = function()
	{
		console.log("Update Function logging id"+$scope.cust.customer_id);
		$http.put('/REST/'+$scope.cust.customer_id, $scope.cust).success(function(response){
			console.log("update function logging response "+response[0]);
			refresh();

		});
	}
	$scope.remove = function(id){
		console.log("remove function logging id "+id);
		$http.delete('/contactList/'+ id).success(function(response){
			console.log("remove function logging response "+response)
			refresh();
		})
	}
	$scope.edit= function(id){
		console.log("edit function logging id "+id);
		$http.get('/REST/'+id).success(function(response){
			console.log("edit function logging response "+response[0].customer_password);
			$scope.cust= response[0];
		})
	}
	/*
	$scope.remove = function(id){
		console.log("remove function logging id "+id);
		$http.delete('/contactList/'+ id).success(function(response){
			console.log("remove function logging response "+response)
			refresh();
		})
	}
	$scope.edit= function(id){
		console.log("edit function logging id "+id);
		$http.get('/contactList/'+id).success(function(response){
			console.log("edit function logging response "+response.name);
			$scope.contact = response;
		})
	}
	
	*/
	$scope.clear= function()
	{
		$scope.cust = "";
		//refresh();
	}
	
}]);



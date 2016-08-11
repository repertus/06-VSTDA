angular.module('myApp').controller('todoCtrl', ['$scope','orderByFilter', function($scope, orderBy){

	// Matrix for table population testing
	var todos = [
		{
			'task': 'hello',
			'priority':'c_low'
		},
		{
			'task': 'bye',
			'priority':'b_medium'
		},
		{
			'task': 'zebra',
			'priority':'b_medium'
		},
		{
			'task': 'horse',
			'priority':'a_high'
		}
	];


	// Adds the user input to the table
	$scope.addNew = function() {
		$scope.todos.push({ 'task' : $scope.task, 'priority' : $scope.priority});
		// Clears input after submission
   		$scope.task = null;
	};




	// Forces the list to only ve re-sorted vertically through drag and drop plug-in
	$scope.sortableOptions = {
	  'ui-floating': true
	};

	
	//Sorting functions since orderBy() needs to run in controller when drag and drop plugin is installed
	$scope.todos = todos;

 	console.log($scope.todos);
	$scope.sortButton = function(sortList) {
    console.log(sortList);
    $scope.reverse = (sortList !== null && $scope.sortList === sortList) ? !$scope.reverse : false;
    $scope.sortList = sortList;
    $scope.todos = orderBy($scope.todos, $scope.sortList, $scope.reverse);
  	};


}]);

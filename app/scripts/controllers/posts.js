angular.module('sampleApp.postsCtrl',[]).controller('postsCtrl', function ($scope) {
	console.log('111');
	$scope.posts = [
		{
			username : 'TEST KIM1',
			body : 'Node test1'
		},
		{
			username : 'TEST KIM2',
			body : 'Node test2'
		}
	]
	var $i = 0;
	$scope.addPost = function () {
		
		$scope.posts.unshift({
			username : 'TEST CASE'+$i,
			body : $scope.postBody
		})
		$i++;
		$scope.postBody = "";
	}
});
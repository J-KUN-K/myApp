'use strict';

/**
 * @ngdoc overview
 * @name sampleAppApp
 * @description
 * # sampleAppApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAppApp', ['ngRoute']).
  config(function ($routeProvider) {
  	$routeProvider
  	.when('/main', {templateUrl : '/views/main.html', controller : 'mainCtrl' })
  	.when('/about', {templateUrl : '/views/about.html', controller : 'aboutCtrl'})
  	.otherwise({redirectTo: '/main'});
  })
  .controller('mainCtrl', function ($scope, $route) {
  	$scope.route = $route;
  	$scope.routes = $route.routes;
  	$scope.$on("$routeChangeSuccess", function (e, cRoute, pRoute) {
  		console.log("현재 라우팅 정보 : ", cRoute.loadedTemplateUrl);
  		if(pRoute) console.log("이전 라우트 정보 : ", pRoute.loadedTemplateUrl);
  	});
  	/*
  	$scope.reload = function () {
  		$route.reload();
  	};*/
  });

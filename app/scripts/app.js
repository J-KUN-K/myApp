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
  .module('sampleApp', [
  	'ngRoute',

  	'sampleApp.developCtrl',
  	'sampleApp.postsCtrl']).
  config(function ($routeProvider) {
  	$routeProvider
  	.when('/main', {templateUrl : '/views/main.html', controller : 'mainCtrl' })
  	.when('/about', {templateUrl : '/views/about.html'})
  	//.when('/develop', {templateUrl : '/views/thingIdo/develop/develop.html', controller : 'developCtrl' })
  	.when('/project', {templateUrl : '/views/develop.html', controller : 'developCtrl' })
  	
  	.when('/project/develop/blog', {templateUrl : '/views/blog.html'})
  	.when('/project/develop/posts', {templateUrl : '/views/posts.html',controller : 'postsCtrl'})
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

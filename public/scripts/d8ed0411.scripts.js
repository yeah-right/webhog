"use strict";var app=angular.module("webhog",["ngCookies","ngResource","restangular","chieffancypants.loadingBar","mgcrea.ngStrap","ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){b.hashPrefix("!"),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",resolve:{entity:["$route","Restangular",function(a,b){return b.one("entity","34f7d4db-76ca-4b81-6d78-0759e0afe6bd").get()}]}}).otherwise({redirectTo:"/"})}]);app.run(["Restangular","$alert","$location","$rootScope",function(a,b,c){return a.setBaseUrl("/api"),a.setDefaultHeaders({"X-API-KEY":"SCRAPEAPI"}),a.setErrorInterceptor(function(a){return(404===a.status||401===a.status)&&(c.path("/"),b({title:a.statusText,content:a.data.error,placement:"top-right",type:"warning",duration:5,show:!0})),!1})}]),angular.module("webhog").controller("MainCtrl",["$scope","entity",function(a,b){a.entity=b}]);
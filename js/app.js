/* global angular */
const app = angular.module('ilaiWebsite', ['ngRoute', 'ngAnimate'])

app.config(function($sceDelegateProvider, $routeProvider) {
    // Set resource origin whitelist:
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads:
        'self',
        // Allow loading from our assets domain:
        'https://sketchfab.com/models/**',
        // Temporary, allow 'test' image:
        'http://www.networkforgood.com/wp-content/uploads/2015/08/bigstock-Test-word-on-white-keyboard-27134336.jpg'
    ]);
    $routeProvider.when('/home', {
            controller: 'mainCtrl',
            templateUrl: 'pages/home.html'
        })
        .when('/3d', {
            controller: '3dCtrl',
            templateUrl: 'pages/3d.html'
        })
        .when('/prog', {
            controller: 'programmingCtrl',
            templateUrl: 'pages/programming.html'
        })
        .when('/resume', {
            controller: 'resumeCtrl',
            templateUrl: 'pages/resume.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
})

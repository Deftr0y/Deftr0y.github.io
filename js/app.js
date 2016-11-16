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
            templateUrl: 'home.html'
        })
        .when('/resume', {
            controller: 'resumeCtrl',
            templateUrl: 'pages/resume.html'
        })
        .when('/page3', {
            controller: 'page3Ctrl',
            templateUrl: 'pages/tempPage3.html'
        })
        .when('/page4', {
            controller: 'page4Ctrl',
            templateUrl: 'pages/tempPage4.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
})

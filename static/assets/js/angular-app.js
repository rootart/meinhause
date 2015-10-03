var MH = angular.module('MH', [
  'ui.router',
  'nouislider',
  'ngResource'
]);

MH.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/properties");

  $stateProvider
    .state("properties", {
        url: "/properties",
        templateUrl: "/static/partials/properties.html",
        controller: 'PropertiesCtrl'
      }
    )
    .state('properties.filter', {
      url: "/properties/filter",
      templateUrl: "/static/partials/filter-results.html"
    })
    .state('properties.detail', {
      url: "/list",
      templateUrl: "/static/partials/property-detail.html"
    })
});
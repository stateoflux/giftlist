angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, macysData, WishListService) {
  // "Gifts" is a service returning mock data (services.js)
  debugger;
  $scope.selectedItem;
  $scope.macysData = macysData;
  $scope.gifts = GiftService.all();
});
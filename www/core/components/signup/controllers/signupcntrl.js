angular.module('mm.core.signup')

.controller('mmSignUpCntrl', function($scope, $state, $stateParams, $mmSitesManager, $mmUtil, $ionicHistory, $mmApp,
            $q, $mmLoginHelper, $translate, $mmContentLinksDelegate, $mmContentLinksHelper) {

             $scope.siteurl = $stateParams.siteurl;

})

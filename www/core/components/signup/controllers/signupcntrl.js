angular.module('mm.core.signup')

.controller('mmSignUpCntrl', function($scope, $state, $stateParams, $mmSitesManager, $mmUtil, $ionicHistory, $mmApp,
            $q, $mmSignUpHelper, $translate, $mmContentLinksDelegate, $mmContentLinksHelper) {

             $scope.siteurl = $stateParams.siteurl;

             $scope.signup = function () {

                var userName = $scope.signup.username,
                    password = $scope.signup.password,
                    confirmPassword = $scope.signup.confirmpassword,
                    email = $scope.signup.email;

                if (!userName) {
                    $mmUtil.showErrorModal('mm.signup.usernameerror', true);
                    return;
                }
             }

             $scope.goToSignIn = function() {

               $mmSignUpHelper.goBackToSignInPage($scope.siteurl);

             }



})

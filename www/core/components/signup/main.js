angular.module('mm.core.signup', [])

.config(function($stateProvider, $urlRouterProvider, $mmInitDelegateProvider, mmInitDelegateMaxAddonPriority) {

    $stateProvider

    .state('mm_signup', {
        url: '/signup',
        templateUrl: 'core/components/signup/templates/signup.html',
        controller: 'mmSignUpCntrl',
        cache: false,   // Disable caching to force controller reload.
        params: {
          siteurl: ''
        },
        onEnter: function($state, $stateParams) {
          if (!$stateParams.siteurl) {
            $state.go('mm_login.init');
          }
        }
    })
  });

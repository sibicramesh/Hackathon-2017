angular.module('app.controllers', [])

.controller('myCarParkCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('reserveBookingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('myCarPark2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', '$http','$q', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $q) {
  $scope.signup = function () {
    var id=$scope.id;
var name=$scope.uname;
  var pass=$scope.pass;
    var phone=$scope.phone;
    var deferred = $q.defer();
    var promise = deferred.promise;
    $http({
      method: 'POST',
      url: 'https://api.mongolab.com/api/1/databases/sample/collections//MyDB?apiKey=1ZOH8YSgfpyJnkDHGCoKR1D6M36Ybm_E',
      data: JSON.stringify({
        id:id,
        username: name,
        password: pass,
        mobile: phone
      }),
      contentType:"application/json"

    }).success(function(data){

      console.log(phone)
      deferred.resolve('Welcome!');
    })

  }
  $scope.autoid = function () {

    this.length = 4;
    this.timestamp = +new Date;

    var _getRandomInt = function (min, max) {
      return Math.floor(Math.random() * ( max - min + 1 )) + min;
    }


      var ts = this.timestamp.toString();
      var parts = ts.split("").reverse();
      var id = "";

      for (var i = 0; i < this.length; ++i) {
        var index = _getRandomInt(0, parts.length - 1);
        id += parts[index];
      }

    $scope.id=id;
    window.localStorage.setItem( id, $scope.id );
    window.localStorage.getItem(id);
      return id;

  }
  $scope.autoid();

}])

  .controller('logincontrol', ['$scope', '$stateParams', '$http', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $state) {
      $scope.logincheck = function () {

        var name=$scope.uname;
        var pw=$scope.pass;
        var words = $http.get('https://api.mongolab.com/api/1/databases/sample/collections/MyDB?q={\"username\":\"'+name+'\",\"password\":\"'+pw+'\"}&apiKey=1ZOH8YSgfpyJnkDHGCoKR1D6M36Ybm_E')
        words.success(function (data) {
          console.log(data);

if(name==data[0].username&&pw==data[0].password){
  $state.go('menu.myCarPark')
}
        });
      }


    }])

.controller('myBookingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

angular.module('app.controllers', [])

.controller('myCarParkCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
<<<<<<< HEAD

.controller('reserveBookingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
=======
   
.controller('reserveBookingCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
>>>>>>> 6247bf58122d3305fb664e0c4ee99e41859a08d9
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  var user_id=101;
 $scope.$on('$ionicView.loaded', function(event) {
    
    $http.get('https://api.mlab.com/api/1/databases/carpark/collections/slot/58f27fcc734d1d3b89ba801e?apiKey=uB6GZgs0JHGxvojb6G9wHunoxCue0JOT').success(function (data) {
          var floorSlots=["A0","A1","A2","A3","A4","A5","A6","A7"];
        var A=new Array(data.A0,data.A1,data.A2,data.A3,data.A4,data.A5,data.A6,data.A7);
             for(var i=0;i<8;i++){
              var slot=document.getElementById(floorSlots[i]);	
                if(A[i]==0)
                    slot.style.backgroundColor ='green';
                 else if(A[i]==user_id)
                     slot.style.backgroundColor ='yellow';
                 else
                    slot.style.backgroundColor ='red'; 
             }
             
    
        }); 
  });
    
$scope.bookSlot = function(a) {
		var slot=document.getElementById(a);		
		console.log(slot.style.backgroundColor);		
		slot.style.backgroundColor = slot.style.backgroundColor == 'red' ? alert("Try other available slot") : confirmSlot();
		function confirmSlot() {
        $http({
          method: 'PUT' ,
          url: 'https://api.mlab.com/api/1/databases/carpark/collections/slot/58f27fcc734d1d3b89ba801e?apiKey=uB6GZgs0JHGxvojb6G9wHunoxCue0JOT',
          //data: JSON.stringify( { "$set" : {"A0" : 1 } } ),
            data: "{$set : {"+a+" : "+user_id+"}}" ,
        
          contentType: "application/json"
        }).success(function (data) {
            //console.log(data.a)
        slot.style.backgroundColor="yellow";
			alert("Slot "+a+" booking is confirmed");
        })
        
			
		};
    };

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

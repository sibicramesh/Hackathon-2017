angular.module('app.controllers', [])
  
.controller('myCarParkCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('reserveBookingCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myBookingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
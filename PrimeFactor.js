"use strick";

function PrimeFactor(form){
    var Num = parseInt(form.number.value);
    var Primes = [];
    
    while (Num % 2 == 0){
	Num = Num / 2;
	Primes.push(2)
	}
    while (Num % 3 == 0){
	Num = Num / 3;
	Primes.push(3)
	}
    while(Num % 5 == 0){
	Num = Num / 5;
	Primes.push(5)
	}
    while(Num % 7 == 0){
	Num = Num / 7;
	Primes.push(7)
	}
    if (Num != 1 && Num % 1 == 0){
	Primes.push(Num)
	}
        var outPutType = document.getElementsByName("output");
    if (outPutType[0].checked == true){
	// output is an unorder list
	document.getElementById("result").innerHTML = Primes;
	}
    else if (outPutType[1].checked == true){
	//output is an unorder table
	//var table = document.createElement("table") ;
	//var tHead = document.createElement('thead');
	//var heading = document.createElement('tr');
	//heading.appendChild(document.createTextNode("Prime Numbers"));
	//document.body.appendChild(table)
	//document.body.appendChild(tHead)
	//document.body.appendChild(heading)
	//var tbody = document.createElement('tbody');
	//for (num in Primes){
	    
	  //  var row = document.createElement('tr');
	    //row.appendChild(document.createTextNode(num))
	    //document.body.appendChild(row)
	  //  }
	var myApp = angular.module('tableCreator', []);
	myApp.controller('table', ['$scope' , function($scope) {
	    $scope.a = 'hello';
	    $scope.b = 'world';
	    $scope.primes = [1,2,3]
	  }]);
	//document.getElementById("result").innerHTML = "this output is not supported yet"
	}
    else if (outPutType[2].checked == true){
	// output is exponational form
	document.getElementById("result").innerHTML = "this output is not supported yet"
	}
    else if (outPutType[3].checked == true){
	// output is a factor tree
	document.getElementById("result").innerHTML = "this output is not supported yet"
	}
};


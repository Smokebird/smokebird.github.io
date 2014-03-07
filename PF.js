
PFF = function(form){
    var x = form.inputbox.value
   // x = Math.floor(x/2);
    console.log(x)
    var primefacotrs = new Array();
    var iprime = true
    var iaprime2 = true
    for(var i =2; i< x; i++){
	if(x%i==0){
	    for(var z=2; z<i; z++){
		if(z%i==0){
		    iprime=false
		}
	    }
	    if(iprime==true){
		primefacotrs.push(i)
		iprime==false
	    }
	    for(var a=2; a < x/i ; a++){
		if(a%i==0){
		    iaprime2=false
		}
	    }
	    if(iaprime2==true){
		primefacotrs.push(x/i)
		iaprime2==false
		    }
	    
		}
	    }
   // console.log(z) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/

    document.getElementById("temp1")

    return x
    console.log(primefacotrs)
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=primefacotrs
    /*return x this may not be needed*/
}



PFF = function(form){
    var x = form.inputbox.value
    x = Math.floor(x/2);
    console.log(x)
    for(var i =2; i< x; i++){
	if(x%i==0){
	    console.log("hi")
	    for(var j=2; j<i+1; j++){
		console.log("for")
		console.log(j)
		console.log(i)
		if(j%i==0){
		    console.log(j)
		    console.log(i)
		    if(J==i){
			console.log(x)
			console.log(i)
			console.log(z)
		    }
		}
	    }
	}
    }
   // console.log(z) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=i
    /*return x this may not be needed*/
}


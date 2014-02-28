
PFF = function(form){
    var x = form.inputbox.value
    x = Math.floor(x/2);
    console.log(x)
    for(var i =2; i<x+1; i++){
	if(x%i){
	    console.log(x)
	    console.log(i)
	}
    }
   // console.log(z) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=i
    /*return x this may not be needed*/
}


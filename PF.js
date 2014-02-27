
PFF = function(form){
    var x = form.inputbox.value
    x = Math.floor(x/2);
    i=2
    while(i<=x){
	if(x%i==0){
	    if(i%i=0){
		z=i;
		i++;
	    }
	}
    }
    console.log(z) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=z
    /*return x this may not be needed*/
}


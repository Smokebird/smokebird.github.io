
PFF = function(form){
    var x = form.inputbox.value
    x = Math.floor(x/2);
    console.log(x)
    i=2
    while(i<x){
	console.log(i)
	if(x%i==0){
	    
	    z=1;
	    while(z<i){
		if(i%z==0){
		    if(i==z){
			z=i;
			i=i++
		    } // if i == z
		} // if i%z
		z=z++
	    } // while z <i
	    i=i++
	} //
	i=i++;
    } //while
    console.log(z) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=z
    /*return x this may not be needed*/
}


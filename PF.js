
PFF = function(form){
    var x = form
    console.log(x) /*only writes to javascript console not page"*/
    /*document.write(x) /*writes five but gets ride of everthing else on the screen*/
    y=document.getElementById("temp1") /*append child does not work*/
    y.innerHTML=x
    /*return x this may not be needed*/
}


/*this is a JS file*/

WLF = function(form){
    var firstWord = form.inputbox1.value
    var lastWord = form.inputbox2.value
    var FWwc  = firstWord.lenght;
    console.log(FWwc)
    var LWwc = lastWord.lenght
    console.log(LWwc)
    console.log(firstWord)
    console.log(lastWord)
    

    var y
    y=document.getElementById("temp1")
    y.innerHTML=firstWord
    var x
    x=document.getElementById("temp2")
    x.innerHTML=lastWord
			
}

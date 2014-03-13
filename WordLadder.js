/*this is a JS file*/

Stackclass = function(){
var stackarray = new Array()

this.push = function(x){
    stackarray.push(x)
}
}


WLF = function(form){
    //console.log(threeLetterWords) this works
    var y
    var firstWord = (form.inputbox1.value) 
    var lastWord = form.inputbox2.value
    var numLetters =form.numLetters.value
    var numLetters = Number(numLetters)
    console.log(z.push(firstWord)
    var FWwc  = (firstWord.length)
    var LWwc = lastWord.length
    if (FWwc == LWwc){
	if(FWwc == numLetters){
	    console.log("words match number choosen")
	    }
	else{
	    console.log("words do not match number choosen")
	    y=document.getElementById("temp1")
	    y.innerHTML="The number letters choosen do match the number of letters in the word choosen. Please change one or the either so that they match"
	    }
	}
    else{
	
	 var y 
	y=document.getElementById("temp1")
	y.innerHTML="Please chosse two words of equal length"
	}
   /* var x
    x=document.getElementById("temp2")
    x.innerHTML=lastWord
	*/		
}

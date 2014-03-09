/*this is a JS file*/

WLF = function(form){
    var y
    var firstWord = (form.inputbox1.value) 
    var lastWord = form.inputbox2.value
    console.log(typeof firstWord)
    console.log(typeof lastWord)
    var FWwc  = (firstWord.length)
    var LWwc = lastWord.length
    if (FWwc == LWwc){
	console.log("same lenght")
	}
    else{
	console.log("not same lenght")
	 var y = "Please choose two words of equal langth."
	y=document.getElementById("temp1")
	y.innerHTML=firstWord
	}
   /* var x
    x=document.getElementById("temp2")
    x.innerHTML=lastWord
	*/		
}

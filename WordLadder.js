/*this is a JS file*/

WLF = function(form){
    var firstWord = string(form.inputbox1.value) // adding quets to eat only returns what is in the quates
    var lastWord = form.inputbox2.value
   // var FWwc = 0 this does not work still is undefined
    FWwc  = Number(firstWord.lenght)// this does not work returns Nan not a real number ;
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

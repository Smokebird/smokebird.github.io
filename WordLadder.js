/*this is a JS file*/

WLF = function(form){
    var firstWord = String(form.inputbox1.value) // adding quets to eat only returns what is in the quates
    var lastWord = form.inputbox2.value
    console.log(typeof firstWord)
    console.log(typeof lastWord)
   // var FWwc = 0 this does not work still is undefined
    FWwc  = Number(firstWord.length)// this does not work returns Nan not a real number ;
    console.log(FWwc)
    console.log(typeof FWwc)
    var LWwc = lastWord.length
    console.log(LWwc)
    console.log(typeof LWwc)
    console.log(firstWord)
    console.log(lastWord)
    

    var y
    y=document.getElementById("temp1")
    y.innerHTML=firstWord
    var x
    x=document.getElementById("temp2")
    x.innerHTML=lastWord
			
}

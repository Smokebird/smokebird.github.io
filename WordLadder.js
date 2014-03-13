/*this is a JS file*/
/* read Francis J.gaus The myth of Flexible Respons international history  review 23:4(Dec 2001) 847 875*/
StackClass = function(){
this.stackarray = new Array()
}
StackClass.prototype.push = function(str){
    this.stackarray.push(str)
    console.log(this.stackarray)
    return this.stackarray
}

StackClass.prototype.shift = function(str){
    x=this.stackarray.pop(str)
    return x
}

StackClass.prototype.cole = function(stack){
    clonestack = this.stackarray
    return clonestack
}

QueueClass = function(){
    this.queuearray = new Array()
}

QueueClass.prototype.queue = function(stack){
    this.queuearray.unshift()
    return queuearray
}

QueueClass.prototype.dequeue = function(stack){
   a=thisqueuearray.shift()
    return a
}
SetClass = function(){
    setarray = new Array()
}

SetClass.prototype.add =function(words){
    setarray.push(words)
}

SetClass.prototype.contains = function(words){
    if(words in setarray){
	return true
    }
    else{
	return false
}
}

WLF = function(form){
    //console.log(threeLetterWords) this works
    var y
    var firstWord = (form.inputbox1.value) 
    var lastWord = form.inputbox2.value
    var numLetters =form.numLetters.value
    var numLetters = Number(numLetters)
    console.log( z.push(firstWord))
    var FWwc  = (firstWord.length)
    var LWwc = lastWord.length
    if (FWwc == LWwc){
	if(FWwc == numLetters){
	    set = new SetClass(firstWord)
	    console.log("words match number choosen")
	    stack = new StackClass(firstWord)
	    queue = new QueueClass(stack)
	    conole.log(queue)
	    if(FWwc ==3){
		for(var i=0;  i < threeLetterWords.lenght; i++){
		    for(var j=0; j< 3){
			// use substring here
			}
		    }
		
	    }
	    if(FWwc == 4){
		for(var i=0; i < fourLetterWords.lenght){

		    }
		}
	    if(FWwc == 5){
		for(var i=o; i < fiveLetterWords.lenght){

		}
		}
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

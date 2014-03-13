/*this is a JS file*/
/* read Francis J.gaus The myth of Flexible Respons international history  review 23:4(Dec 2001) 847 875*/
StackClass = function(){
this.stackarray = new Array()
}
StackClass.prototype.push = function(str){
    this.stackarray.push(str)
    return this.stackarray
}

StackClass.prototype.pop = function(){
    x=this.stackarray.pop()
    return x
}

StackClass.prototype.cole = function(stack){
    clonestack = this.stackarray
    return clonestack
}

QueueClass = function(){
    this.queuearray = new Array()
    console.log(typeof this.queuearray)
}

QueueClass.prototype.queue = function(stack){
    this.queuearray.unshift(stack)
    return this.queuearray
}

QueueClass.prototype.dequeue = function(stack){
   a=this.queuearray.shift(stack)
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
    
    var FWwc  = (firstWord.length)
    var LWwc = lastWord.length
    if (FWwc == LWwc){
	if(FWwc == numLetters){
	    set = new SetClass(firstWord)
	    console.log("words match number choosen")
	    stack = new StackClass()
	    console.log(stack.push(firstWord))
	    console.log(this.stackarray)
	    Queue = new QueueClass()
	   console.log(Queue.queue(stack))
	    console.log(typeof  Queue.queuearray)
	    if(FWwc ==3){
		console.log(typeof this.queuearray)
		for(var c=0; c < Queue.queuearray.length; c++){
		   f=Queue.dequeue
		    for(var i=0;  i < threeLetterWords.lenght; i++){
			    for(var j=0; j< 2; j++){
				e=f.pop()
				var errorcount = 0
				if(e.substring(j,j+1) != threeLetterWords[i].substring(j,j+1)){
				    errorcount=errorcount+1
				}
				   
			}
				if(errorcount == 1){
				    f.push(e)
				    console.log(f.push(threeLetterWords[i]))
				    }
		    }
		
	    }
		}

	    if(FWwc == 4){
		for(var i=0; i < fourLetterWords.lenght; i++){

		    }
		}
	    if(FWwc == 5){
		for(var i=o; i < fiveLetterWords.lenght; i++){

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

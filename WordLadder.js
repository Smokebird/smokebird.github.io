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

StackClass.prototype.clone = function(stack){
    clonestack = new Array()
    clonestack = this.stackarray
    return clonestack
}

QueueClass = function(){
    this.queuearray = new Array()
    console.log(typeof this.queuearray)
}

QueueClass.prototype.queue = function(stack){
    return  this.queuearray.unshift(stack)
   
}

QueueClass.prototype.dequeue = function(stack){
   return  this.queuearray.shift(stack)
    
}
SetClass = function(){
   this.setarray = new Array()
}

SetClass.prototype.add =function(words){
    this.setarray.push(words)
}

SetClass.prototype.contains = function(words){
    if(words in this.setarray){
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
	    set = new SetClass()
	    set.add(firstWord)
	   // console.log(this.setarray) undefined
	   // console.log(set.this.setarray) can not read
	    console.log(set.setarray)
	   // console.log(SetClass.setarray) undefined
	   // console.log(set.SetClass.setarray) can not read
	    console.log("words match number choosen")
	    stack = new StackClass()
	    stack.push(firstWord)
	    console.log(stack.stackarray)
	    queue = new QueueClass()
	   queue.queue(stack.stackarray)
	    console.log(queue.queuearray)
	    console.log(typeof  queue.queuearray)
	    if(FWwc ==3){
		if(firstWord != lastWord){
		    for(var c=0; c < queue.queuearray.length+1; c++){
			console.log(c)
			console.log(queue.queuearray.length)
			//console.log(queue.dequeue)
		    
			console.log(queue)
			console.log(queue.queuearray)
			// console.log(queue.queuearray.dequeue())
			console.log(queue.queuearray)
			//console.log(queuearray.dequeue) queuearray is not defined
			// console.log(this.queuearray.dequeue) cannot read property 'dequeue' of undefined
			f=queue.dequeue()
			console.log(f)
			console.log(typeof f)
			
			e=f.pop()
			//console.log(g)
			//e=g.clone
			console.log(e)
			console.log(threeLetterWords.length)
			for(var i=0;  i < threeLetterWords.length + 1 ; i++){
			    console.log(i)
			
			    console.log(e)
			    var errorcount = 0
			    for(var j=0; j< 2; j++){
				console.log(j)
				//e=f.pop()
				//console.log(f.pop())
				//console.log(e)
				
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
		else{
		     console.log("first word == last word")
		    }
	    }

	    if(FWwc == 4){
		for(var i=0; i < fourLetterWords.length; i++){

		    }
		}
	    if(FWwc == 5){
		for(var i=o; i < fiveLetterWords.length; i++){

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

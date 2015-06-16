
function PrimeFactor(form){
    var Num = parseInt(form.number.value);
    var Primes = [];
    
    while (Num % 2 == 0){
	Num = Num / 2;
	Primes.push(2)
	}
    while (Num % 3 == 0){
	Num = Num / 3;
	Primes.push(3)
	}
    while(Num % 5 == 0){
	Num = Num / 5;
	Primes.push(5)
	}
    while(Num % 7 == 0){
	Num = Num / 7;
	Primes.push(7)
	}
    document.getElementById("result").innerHTML = Primes;

}

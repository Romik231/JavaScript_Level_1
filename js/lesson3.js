function isPrime(num) {
    if(num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;    

}


let prime_numbers = [];
var a = 0;
while(a <=100){
    if (isPrime(a)){
        prime_numbers.push(a);
    }
    a++;
}
console.log(prime_numbers);




function isEven(x){
        
    if(x % 2 == 0){
        return true;
    }else  {
        return false;
    }
}

let y = 0;
do{
   if(y == 0){
       console.log("0 - это ноль");
   } else if(isEven(y)) {
       console.log(y + " - четное число");
   } else {
       console.log(y + " - нечетное число");
       
   }
    y++;
} while(y <= 10);




for (var i = 0; i < 10; i++){
    console.log(i);
}

template="x";
str="";
for(var b = 0; b < 20; b++){
    console.log(str=str.concat(template))
}
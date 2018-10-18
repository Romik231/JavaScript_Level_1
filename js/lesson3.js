console.log(++++++Задание 1 Вывод простых чисел от 0 до 100++++++);

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

console.log(++++++Задание 2 Вывод чисел от 0 до 10 с определением четных и нечетных+++++++);


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


console.log(+++++++Задание 3 Вывод чисел от 0 до 9 без использования тела цикла+++++++);

for (var i = 0; i < 10; i++){
    console.log(i);
}


console.log(+++++++Задание 4 пирамида+++++++);

template="x";
str="";
for(var b = 0; b < 20; b++){
    console.log(str=str.concat(template))
}
/*
// Задание 1 Вывод температуры по Фаренгейту
var Tc = prompt("Введите температуру С:"); // Введите температуру в градусах по Цельсию
var Tf = (9 / 5) * Tc + 32; //Формула расчета градусов оп Фаренгейту
alert('Температура по фаренгейту ' + '' + Tf); //Результат расчетов температуры

// Задание 2 Объявление переменных
var admin; //Переменная admin
var name = 'Василий'; //Переменная name со значением "Василий"
admin = name; // Присваиваем переменной admin значение переменной name
alert(admin); // Выводим значение переменной admin

// Задание 3 Сложение простых типов
var x = 1000 + "108"; //Складываем число со строкой, будет строка '1000108'. "+" конкатенирует строки, чтобы получилось математическое выражение, нужно преобразовать строку в число с помощью функции parseInt("108"), var x = 1000 + parseInt("108");
alert(x); // Выводим значение переменной x
*/



// ЗАДАНИЕ КО ВТОРОМУ УРОКУ

/*
//Задание 1
var a = 1, b = 1, c, d; //Задаем переменные
c = ++a; alert(c); // 2 - потому что ++a префиксная форма записи, и сначала к a прибавляется 1 и потом значение возвращается
d = b++; alert(d); // 1 - потому что b++ постфиксная форма записи, сначала возвращается b = 1, затем прибавляется 1 и значение сохраняется
c = (2+ ++a); alert(c); // 5 -потому что a из строки 24 записало значение 2, так как префиксная форма, теперь 2 + +aa опять же префиксная форма, которая прибаляет 1 и возвращет значение, то есть a станет равно 3, 2 + 3 = 5
d = (2+ b++); alert(d); // 4 - потому что в строке 25 b записало значение 2, здесь получается 2 + 2 = 4, но значение b запишется равным 3, так как b++ сначала возвращает значение, а потом прибавляет 1
alert(a); // 3 - в строке 24 a приняло значение 2, в строке 26 a приняло значение 3, поэтому alert(a) = 3;
alert(b); // 3 - по аналогии в строке 25 b приняло значение 2, а в строке 27 приняло 3 поэтом alert(b) = 3
*/


/*
//Задание 2
var a = 2;
var x = 1 + (a *= 2);// x будет равен 5, a *= 2 тоже самое a = a * 2 
*/


/*
//Задание 3
let a = 7;
let b = 15;
if(a >= 0 && b >= 0) {
	console.log(a - b);
}
    else if(a < 0 && b < 0) {
	console.log(a * b);
}
		
	else if((a >= 0 && b < 0) || (a < 0 && b >= 0)){
	console.log(a + b);	
}
	else{
	console.log("Что-то не так")	
}
*/

// Задание 4

/*
let a = 10;
switch (a){
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	case 15:
		console.log(15);
		break;
	default:
		console.log("Что-то пошло не так")
		
}
*/

//Задание 5


/*
function summ(x, y) {

    return (x + y);

}

console.log(summ(10, 20));

function substraction(a, b) {
    return (a - b);
}
console.log(substraction(30, 15));


function multiply(d, e) {
    return (d * e);
}
console.log(multiply(5, 5));


function division(z, f) {
    return (z / f);
}
console.log(division(6, 6));
*/






// Задание 6
/*
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "summ":
            return (summ(arg1, arg2));
            break;
        case "substraction":
            return (substraction(arg1, arg2));
            break;
        case "multiply":
            return (multiply(arg1, arg2));
            break;
        case "division":
            return (division(arg1, arg2));
            break;
        default:
            return ("Необходимо вести функцию");
    }

}
console.log(mathOperation(10, 5, ""));
*/

// Задание 7

/*
console.log(0 == null); //null = undefined и больше ничему, поэтому результат false
*/


//Задание 8
/*
function power(val, pow) {
    if (pow != 1) {
        return (val * power(val, pow - 1));
        }
        else {
            return (val);
        }
    }
console.log(power(2,5));
*/
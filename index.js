//1
let admin, name;
name = 'John';
admin = name;
alert(admin);

//2
let ourPlanet = 'Earth';
let currentUserName = 'Anel';

//3
//let name = "Ilya";
//alert( `hello ${1}` ); // hello 1
//alert( `hello ${"name"}` ); // hello name
//alert( `hello ${name}` ); // hello Ilya

//4
let userName = prompt ("Введите Ваше имя?");
alert(userName);

//5
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3"//6
4 + 5 + "px"//45px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2//nan
"  -9  " + 5//-95
"  -9  " - 5//-14
null + 1//1
undefined + 1//nan
" \t \n" - 2//-2

//6
let a = +prompt ("Первое число?", 1);
let b = +prompt ("Второе число?", 2);
alert(a+b);

//7
let num = 3;
alert(num);

//8
let c = 10;
let d = 2;
alert(c+d);
alert(c-d);
alert(c*d);
alert(c/d);

//9
let e = 15;
let f = 2;
let g = e+f;
alert(g);
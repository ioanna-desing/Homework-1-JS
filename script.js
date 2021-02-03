// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let welcome = 'hello';
// let adress = 'owu';
// let domen = 'com';
// let country = 'ua';
// let num = 1;
// let ten = 10;
// let minus = -999;
// let sequence = 123;
// let pi = 3.14;
// let prado = 2.7;
// let integer = 16;
// let truth = true;
// let untruth = false;
// console.log(welcome);
// console.log(adress);
// console.log(domen);
// console.log(country);
// console.log(num);
// console.log(ten);
// console.log(minus);
// console.log(sequence);
// console.log(pi);
// console.log(prado);
// console.log(integer);
// console.log(truth);
// console.log(untruth);
// alert(welcome);
// alert(adress);
// alert(domen);
// alert(country);
// alert(num);
// alert(ten);
// alert(minus);
// alert(sequence);
// alert(pi);
// alert(prado);
// alert(integer);
// alert(truth);
// alert(untruth);
// welcome ='hi'
// adress = 'ioanna';
// domen = 'ua';
// country = 'Ukrania';
// num = 'twenty';
// ten = 'ten';
// minus = -100;
// sequence = 24;
// pi = -3.14;
// prado = 'devil';
// integer = 100;
// truth = 25;
// untruth = 50;
// console.log(welcome);
// console.log(adress);
// console.log(domen);
// console.log(country);
// console.log(num);
// console.log(ten);
// console.log(minus);
// console.log(sequence);
// console.log(pi);
// console.log(prado);
// console.log(integer);
// console.log(truth);
// console.log(untruth);
// alert(welcome);
// alert(adress);
// alert(domen);
// alert(country);
// alert(num);
// alert(ten);
// alert(minus);
// alert(sequence);
// alert(pi);
// alert(prado);
// alert(integer);
// alert(truth);
// alert(untruth);
// document.write(welcome);
// document.write(adress);
// document.write(domen);
// document.write(country);
// document.write(num);
// document.write(ten);
// document.write(minus);
// document.write(sequence);
// document.write(pi);
// document.write(prado);
// document.write(integer);
// document.write(truth);
// document.write(untruth);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let myName = prompt('Enter your name');
// let myPatronic = prompt('Enter your patronic')
// let age = prompt(' Enter your age')
// document.write( "Вітаю" + myName + myPatronic +". Тобі" + age +"років");
// let myInfo = myName + myPatronic + age ;
// console.log(myInfo);

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let number1 = +prompt('enter number');
// let number2 = +prompt('enter number');
// let number3 = +prompt('enter number');
// console.log(number1);
// console.log(number2);
// console.log(number3);

// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// let number1 = parseInt(prompt('enter number'));
// let number2 = parseInt(prompt('enter number'));
// let number3 = parseInt(prompt('enter number'));
// let number4 = parseInt(prompt('enter number'));
// console.log(number1+number2+number3+number4);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let number1 = parseFloat(prompt('введите дробное число, например 5.4'));
// let number2 = parseFloat(prompt('введите дробное число, например 5.4'));
// let number3 = parseFloat(prompt('введите дробное число, например 5.4'));
// let result = (number1+number2+number3);
// console.log(result);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// let number1 = Math.round(prompt('введите дробное число, например 5.4'));
// let number2 = Math.round(prompt('введите дробное число, например 5.4'));
// let number3 = Math.round(prompt('введите дробное число, например 5.4'));
// console.log(number1+number2+number3);

// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.

  // let number1 = +prompt('enter number');
// let number2 = +prompt('enter number');
// let result = Math.pow (number1, number2);
// console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100'; 
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Поставити відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!

// console.log(5 < 6); 
// console.log(5 > 6);
// console.log(5 === 6) ;
// console.log(5 >=6) 
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 < 10); 
// console.log(10 > 10); 
// console.log(10 !== 10); 
// console.log(123 ==='123'); 
// console.log(123 !== '123'); 

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = 'true';
// let num = 123;
// let flag = true; 
// let txt = 'Привет';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори. 

// let a1 = 10*5-16;
// let a2 = (5 - 3)*6;
// let a3 = 2 * 30 +6;
// let a4 = (18 / 2)*10;
// let a5 = 34 + 60 - 7;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 2;
// let a7 = 3;
// let a8 = '53';
// let a9 = 2;
// let a10 = '75кг';

// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let p = 3.14;
// let v = p*dC*heightC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = Math.pow(3,2);
// let m = Math.pow(4,2);
// let k = n+m;
// console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = 'Hello world'
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let userInfo = 'Богомирова Иоанна Константиновна';
// let age = 35;
// let userHobby = 'Рисование';
// alert(userInfo +'\n' + age +'\n' + userHobby);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = (str1+ "<br/>"+str2 + "<br/>"+str3);
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
//  let a = 5;
//  document.write(str + a + "<br/>"); - '205'
//  document.write(str - a + "<br/>"); - 15
//  document.write(str * "2" + "<br/>"); - 40
//  document.write(str / 2 + "<br/>");  - 10 

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")-number
//     parseInt("-7.875")-number
//     parseInt("435")-number
//     parseInt("Вася")-NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    
// let str = prompt("Enter something", "ho-ho");
// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let number1 = + prompt('enter number');
// let number2 = + prompt ('enter number');
// alert(number1+number2);



// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let userName = prompt('Введите Ваше имя');
// let userSurname = prompt('Ваша фамилия?');
// let userAge = prompt('Сколько Вам лет?');
// alert('Доброго вечера' + '\n' + userName +'\n' + userSurname + 'Мои поздравления что вам' + '\n' + userAge);


// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let trafficSignal = prompt('Який колір світлофора?');
// switch (trafficSignal) {
//     case 'зелений':
//         alert ('йди');
//         break;
//     case 'жовтий':
//         alert('Зачекай');
//         break;
//     case 'червоний':
//         alert('Стій!!!');
//         break;
//     case 'в аварійному стані':
//         alert('Роби що хочеш!');
//         break;
// }

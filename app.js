// console.log(2 + 2);
// // math operator _ + - * / ** %
// console.log(2 * 3);
// console.log(5 % 2);
// // order of opration - bodmas, pemdas
// console.log(6 / 3 + 5);

// let balance = 500;
// const t1 = 20;
// const t2 = 100;
// const d1 = 200;
// console.log(balance - t1 - t2 + d1);

// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /= 5;

// console.log(post);
// let likes = 0
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++;
// likes--;
// console.log(likes);
// // NaN - not a number
// console.log(5 * 'hello');
// // boolean - true and false
// console.log(true);
// console.log(false);


// const country = 'Nigeria';
// const continent = 'africa';
// let population = 200000000;

// console.log(country, continent, population);
// const isisland = false;
// const language = 'English';

// // console.log(population / 2);
// population /= 2;
// console.log(population);
// population++
// console.log(population);
// // template literal -
// // description - Nigeria is in africa and it population of 100000001 people speack english

// const description1 = `${country} is in ${continent} and it population of ${population} people speak ${language}`
// console.log(description1);

// // Nigeria as a country speak english
// const description2 =`${country} as a country speak ${language}`
// console.log(description2);

// // boolean - true and false
// // comparisim operators - < > <= >= ==
// // = assignment sign
// // == loose equality sign, === strict equality sign
// console.log(6 < 3);
// console.log(5 >= 5.0);
// console.log(4 == '4');
// console.log(4 === '4');

// // logical operators and &, or|, not!
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2 === 2);
// console.log(5 != 5);
// // type conversion and type coecrction
// // sting to number
// const str = '90'
// console.log(typeof str);
// const converted = Number(str)
// console.log(typeof converted);

// // number to string
// const num = 9000000;
// console.log(typeof num);
// const converter2 = String(num);
// console.log(typeof converted2);

// // type corecion
// // Null - null
// let age = null
// console.log(age, age + 4, `my age is ${age}`);
// // Undifined - undefined
// let year;
// console.log(year);
// console.log(year, year, + `the year is ${year}`);
// .console.log(Boolean('1'));



// // conditional fliw
// // conditional statement
// // if(condition){code}
// const password = "219rts,q"
// if (password.length > 6) {
//     .console.log('your password is strong');
//     if (false) {
//         console.log(working);
//     }
//     // if else
//     // if(condition){
//     // code1
//     // }else{
// // }
//     }
// }



// const country = "japan"
// const continent = "asia"
// const population = 13;
// const isisland = false;
// const language = "japanese";



// if (language === 'English && population < 50 && isisland') {
//     console.log(`you should live in ${country}`);
// } else {
//     console.log(`${country} does not meet your criteria`);
// }
// const age = 18;
// // >=
// if (age >= 18) {
//     console.log("you are an adult")
// } else {
//     console.log("you are not one");
// }
// // if (condition) else if (another condition ) else if (condition){}else{}
// const password = '43344436u@'
// // recommended >7 an dinclude @, strong > 7 and weak

// if (password.length >= 7 && password.includes('@')) {
//     console.log("your password is recommended");
// } else if (password.length >= 7) {
//     console.log('your password is strong');
// } else {
//     console.log("your password is weak");
// }
// // weather a number is positive, negative or zero

// const num = "5"
// if (num > 0) {
//     console.log(`${num} number is positive`)
// } else if (num < 0) {
//     console.log(`${num}is a negative number`);
// } else {
//     console.log("this is zero")
// }
// // even or odd

// if (num % 2 === 0) {
//     console.log("this is even");
// } else {
//     console.log("this is odd");
// }


// const club = 49;
// if (club < 18) {
//     console.log("welcome to the baby section");
// } else if (club <= 50)  {
//     console.log("welcome to the club");
// } else  {
//     console.log("welcome to the V-i-p");
// }
// // switch statment
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//      case 2:
//         console.log("tuesday");
//         break;
//      case 3:
//         console.log("wednessday");
//         break;
//      case 4:
//         console.log("thursday");
//         break;
//      case 5:
//         console.log("friday");
//         break;
//       case 6:
//         console.log("saturday");
//         break;
//      case 7:
//         console.log("sunday");
//         break;



    // default:
//         console.log("not a a valid day");
//         break;
// }
// // ternary operator
// // condition ? action 1 : action 2

// 15 > 7 ? console.log("yes") : console.log("no");

// const num2 = 47;
// num2 % 2 === 0
//     ? console.log("this is An even number ")
//     : console.log("this is an odd number ");

//     // LOOPS
// // for (initializer let 1 = 0; condition i < 5; increment i++){code}
// for (let i = 0; i < 10;  i++) {
//     console.log(`in the loop ${i}`);
// }
// console.log("outside of the loop");

// // initializer
// // while (condition){code increment}
// let x = 0
// while (x < 20) {
//     console.log('HELLO');
//     x++;
// }
// function
// const var1 = "john"

// // function declaration
// function myfunction() {
//     console.log("HELLO CLASS");
//     console.log("You are wellcome");
// }
// myfunction();
// function greet(name = "user", age = 18) {
//    console.log("Welcome" + name + age ); 
// }

// greet("john", 76);
// greet("john", 5);
// greet("john", 76);
// greet();
// greet("ola");

// // calculate the age of the user
// // 2023-year
// function calcage(year) {
//     const age = 2023 - year;
//     console.log();
// }

function discrbecountry(country, population, capitalcity) {
     
    console.log(`${country} has ${population} million people and it capital city is ${capitalcity}` );
}
discrbecountry("finland", 6, 'helsinki');
discrbecountry("russsia", 65, "moscow");
discrbecountry('nigeria', 224, 'abuja');

// cheack if email is valid or not

function checkemail(email) {
    if (email.includes("@")) {
        console.log(`${email} is a valid email address`);
    } else {
        console.log(`${email} is not a valid email`);
    }
}
checkemail("abc@google.com")

// function expression
const myage = 90
console.log(myage);

// my function2(4, 5);
const myfunction2 = function (a, b) {
    console.log("anything");
    console.log(a + b);
}
myfunction2(7, 8)

const precious = function (a, b) {
    return a * b;
};
precious(9, 6)
const test = precious(10, 10);
console.log(test);



const calcaverage = function (a, b, c) {
    const avg = (a + b + c) / 3;
    return number(avg.toFixed(2))
};
const avgDolphin2 = calcaverage(123, 98, 89);
const avgKaola2 = calcaverage(110, 87, 95);
console.log(avgDolphin2, avgKaola2);

function checkwinner(teamA, teamB) {
    if (teamA > teamB) {
        console.log("First Team Won");
    } else if (teamB > teamA) {
        console.log("Second Team Won");
    } else {
        console.log("No winner");
    }
}

checkwinner(avgDolphin2, avgKaola2);
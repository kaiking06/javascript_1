//Array

//const students=['luther','jerry','mende','rosemary']

//students[0]='king'
//console.log(students)

const towns= ['kumba','limbe','tiko','buea']
//console.log(towns)

towns[2]='douala'
console.log(towns)

towns[4]= 'matoh';
console.log(towns)

const cars= ['mercedes','toyota','bmw','volvo']

cars_length= cars.length;
console.log(cars_length)


//////////////Array Methods///////////////

const students=['luther','jerry','mende','rosemary']
//first method --push/pop method

// push method adds a new item to the end of an array
students.push('pamela')
console.log(students)

//pop method removes the last item from the end of an array
students.pop();
console.log(students)

//second method --shift/unshift method

//unshift adds a new item at the beginning of an array 
const cats=['cat1','cat2','cat3'];
cats.unshift('cat4');
console.log(cats)

//shift method remove an item at the beginning of an array
cats.shift();
console.log(cats)

//indexof
students.indexOf('jerry')
console.log(students.indexOf('jerry'))

//slice method is used to copy different portion of an array

const friends=['manoh','cross','bash','magna','plies'];
const closeFriends=friends.slice(1,4)
console.log(friends)
console.log(closeFriends)

/// Array Quiz////
/*
const books= ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
 1) Access the last elements of the books array usiing the lenght 
 of the array and print it to the console


 const films = [
    ['Hobbit1', 'Hobbit2', 'Hobbit3'],
    ['matrix1', 'matrix2', 'matrix3'],
    ['godFather1', 'godFather2', 'godFather3']
 ]
 2) Print the godFather3 film from the film array to the console
 */

 //Solutions to Quiz//
/*
 const books= ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
 1) Access the last elements of the books array using the lenght 
 of the array and print it to the console
 */

 const books= ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];
 console.log(books[books.length-1])

/*
 const films = [
    ['Hobbit1', 'Hobbit2', 'Hobbit3'],
    ['matrix1', 'matrix2', 'matrix3'],
    ['godFather1', 'godFather2', 'godFather3']
 ]
 2) Print the godFather3 film from the film array to the console
 */

 const films = [
    ['Hobbit1', 'Hobbit2', 'Hobbit3'],
    ['matrix1', 'matrix2', 'matrix3'],
    ['godFather1', 'godFather2', 'godFather3']
 ]
console.log(films[2][2]);

/////////////////////functions/////////////////

///function Declaration/////////////


function kaiKing() {
   console.log('kai');
}

kaiKing();


function myLines() {
   console.log('hello world');
   console.log('how are you'),
   console.log('my name is luther');
}

myLines();


////////function arguements//////////////

function sayHello(name) {
      console.log('hi' + ' ' +  name);
}

sayHello('king');
sayHello('kai');
sayHello('luther');

function cube(number) {
   console.log(number * number * number);
}

cube(4);
cube(5);

/////////////functions return keywords/////////////


function cubes(number) {
   return (number * number * number);
}

console.log(cubes(4));


function cooks(man) {
   return cooks===pan
}
console.log(cooks);

////////////

function children(mende, makane ,iya) {
   if (mende=== children) {
      return (mend)
   }
   return mende===children ('if mende is children');


}
console.log(children);

///////////////////////////////////

function toDoList(read, sleep, dance) {
   console.log('read' + ' ' +'sleep' +' '+ 'dance')

}
toDoList();
/////////////////////////

function calculateAge(birthYear) {
   return 2020-birthYear;
}
const Age= calculateAge(1993);
console.log('this is the age',Age);


/////////////////////////

function enterCafe(age){
   if (age <19) {
      return 'you cannot enter the cafe';
   
   } 
   return 'you can enter the cafe';
}
const cafe= enterCafe(17);
console.log(cafe)

//////////////function Quiz/////////////
/*
!. Create a function called 'subtraction', this function takes two arguements X and Y, then subtracts one of these arguments from the other and returns the result. The console log the result 

///////////////solution///////
*/

function subtraction(X,Y) {
   return Y - X;
}
const result1= subtraction(30, 74 );
console.log(result1);


/*
2. Declare a function called 'Is odd', this function is gonna take one argument and it is gonna check if that argument is an 'odd number', then it needs to return a boolean and console that

/////////solution//////
*/

const isOdd = function (number) {
if (number % 2 !==0) {
    return true;
}
  return false;
}
console.log(isOdd(5));

/*
3. Declare a funtion called 'addition',it is gonna take one argument then it needs to sum up all the numbers from 1 to that argument and return the total value. Then you need to console log that total.

////////solution//////
*/


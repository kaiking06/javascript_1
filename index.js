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
//function hello(name) {
//  console.log(`Hello ${name}`);
//}
//hello("Oheneba");


const name = 'Oheneba'
function hello(name, country  = 'Ghana') {

  console.log(`Hello ${ name } from ${ country }`);
}

hello("Oheneba");


//function printDetails(person) {
//  const age = (person.age ? person.age : 0);
//  const country = (person.country ? person.country : 'Ghana');
//
//  console.log(`Hello ${ person.name } from ${ person.country } with age ${ age } years`);
//}

//printDetails({ name: 'peter',country: 'Dubai', age: 29 });


function printDetails(person) {
  const age = (person.age ? person.age : 0);
  const country = (person.country ? person.country : 'Ghana');


  return `Hello ${ person.name } from ${ country } with age ${ age } years`;
  console.log("You made it here")
}

const outputMessage = printDetails({ name: 'peter', age: '29' });
console.log(outputMessage)

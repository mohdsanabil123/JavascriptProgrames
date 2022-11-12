// Program to find student's result.

const sName   = prompt('Enter sudent name:');
const sClass = prompt('Enter class:');
const a = parseInt(prompt('Ener marks of Hindi:'));
const b = parseInt(prompt('Ener marks of English:'));
const c = parseInt(prompt('Ener marks of Physics:'));
const d = parseInt(prompt('Ener marks of Chemistry:'));
const e = parseInt(prompt('Ener marks of Maths:'));

var sum = (a + b + c + d + e);
var per = ( sum/5 );
document.write('Name: ', sName, '<br>' );
document.write('Class: ', sClass, '<br>');
document.write('Marks: ', sum, '/500', '<br>');
document.write('Percentage: ', per, '%', '<br>');

// Calculating grade

if ( per < 33 ) {
    var grade = 'E';
    var result = 'failed'
}
else if ( ( per >= 33 && per < 45 ) ) {
    grade = 'D';
}
else if ( ( per >= 45 && per < 60 ) ) {
    grade = 'C';
}
else if ( ( per >= 60 && per < 80 ) ) {
    grade = 'B';
}
else {
    grade = 'A';
}

if ( ( a < 33 ) || ( b < 33 ) || ( c < 33 ) || ( d < 33 ) || ( e < 33 ) ) {
    result = 'failed';
}
else {
    result = 'passed';
}

document.write('Grade: ', grade, '<br>');
document.write('Result: ', result);
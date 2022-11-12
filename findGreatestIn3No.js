var a = 40
var b = 20
var c = 50

// console.log(a+b)

if ( a > b && a > c ) {
    //console.log('a is greatest');
    //document.write()
    document.getElementById('check').innerHTML = 'a is greatest';
} 
else if ( b > a && b > c ) {
    // document.write('b is greatest')
    document.getElementById('check').innerHTML = 'b is greatest';
}
else {
    // document.write('c is greatest')
    document.getElementById('check').innerHTML = 'c is greatest';
}
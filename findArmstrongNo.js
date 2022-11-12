// Program to find given no is armstrong no or not.

var x = prompt('Enter any No:');

var y = parseInt(x);

// var y = x.split('');
var i = 0;
var len = x.length;
var sum = 0;
for ( i, len; i < len; i++) {
    // document.write(x[i] + '<br>');
    sum += ( (x[i]) * (x[i]) * (x[i]) ) ;
}

// document.write(sum);

if ( y == sum ) {
    document.write('No is Armstrong! ', sum);
} else {
    document.write( 'No is not Armstrong! ', x )
}
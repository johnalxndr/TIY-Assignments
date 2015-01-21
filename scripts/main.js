var assert = require('assert');

function add(A, B){
    A + B;
};
add(2, 3);

function diff(A, B){
    A - B;
};
diff(5,4);

function prod(A, B){
    A * B;
}
prod(5, 5);

function div(A, B){
    A / B == 3   
}
div(25, 5);

assert(div(8, 4)==7 )




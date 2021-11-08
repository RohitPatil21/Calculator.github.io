// insert the number in textview.
function insert(num) 
{
document.getElementById('displaybox').value = document.getElementById('displaybox').value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
var exp = document.getElementById('displaybox').value;
if(exp)
{
document.getElementById('displaybox').value = eval(exp)
}
}


function backspace()
{
var exp = document.getElementById('displaybox').value;
document.getElementById('displaybox').value = exp.substring(0, exp.length - 1);
}


// clear input box function 
function clearBox(){
    document.getElementById('displaybox').value = ' ';
}
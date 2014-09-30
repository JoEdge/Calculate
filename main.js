
var  numOne = document.getElementById('num_one');
     numTwo = document.getElementById('num_two');
     submit = document.getElementById('calculateBtn');
     answer = document.getElementById('answer');

     var result = function (x,y) {
         var sum = x + y;

         answer.innerHTML = sum;
    };


    submit.onclick = function ()    {
       var a = (numOne.value);
       var b = (numTwo.value);
       result(a,b);
 };

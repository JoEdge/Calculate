var text;
    numOne = document.getElementById ('num_one');
    numTwo = document.getElementById ('num_two');
    button = document.getElementById('calculateBTN');
    submit;
    answwer;


     Calculate = function (numOne,numTwo) {
       return (numOne + numTwo);

    };

    button.onclick = function () {

    text = document.getElementById(numOne,numTwo).value;

    };


answer = Number(calculate);

----------------------------


 document.getElementById('actionBTN').onclick = function () {

   text = document.getElementById('name').value;

   helloWorld(text);

 };

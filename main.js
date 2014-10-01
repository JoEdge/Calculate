
 var  numOne = document.getElementById('num_one');
      numTwo = document.getElementById('num_two');
      submit = document.getElementById('calculateBtn');
      answer = document.getElementById('answer');


      submit.onclick = function() {
        var result = Number(numOne.value) + Number(numTwo.value);
        answer.innerHTML = result;

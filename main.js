
 var  numOne = document.getElementById('num_one');
      numTwo = document.getElementById('num_two');
      add = document.getElementById('addBtn');
      subtract = document.getElementById('subBtn');
      multiply = document.getElementById('multBtn');
      divide = document.getElementById('divBtn');
      answer = document.getElementById('answer');


      add.onclick = function() {
        var result = Number(numOne.value) + Number(numTwo.value);
        answer.innerHTML = result;
};


      subtract.onclick = function() {
        var result = Number(numOne.value) - Number(numTwo.value);
        answer.innerHTML = result;
};

      multiply.onclick = function() {
          var result = Number(numOne.value) * Number(numTwo.value);
          answer.innerHTML = result;
};


      divide.onclick = function() {
            var result = Number(numOne.value) / Number(numTwo.value);
            answer.innerHTML = result;

};

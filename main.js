(function(util){
  var values = [1,2,3,4,5,6,7,8,9];
  var answer = '';
  for (var i = 0; i < values.length; i++) {
    answer += util.factorial(values[i]) + ' ';
  }
  document.getElementById("answer").innerHTML = answer;
})(myUtil);

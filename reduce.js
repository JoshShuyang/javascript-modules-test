myUtil.reduce = function(num, iteratee) {
  var length = num,
      start = 1;
      memo = start;

  for(; start <= length; start += 1){
    memo = iteratee(memo, start)
  }
  return memo;
};

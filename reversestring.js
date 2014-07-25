var reverse = function(string){
  var arr = string.split('');
  var first = 0;
  var last = arr.length-1;
  // debugger;
  while(first<last){
    var temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
  }
  return arr.join('');
};
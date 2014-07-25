// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
// Let's say:
// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
// Examples:
// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false
var opener = {
  '{': '}',
  '(': ')',
  '[': ']'
};

var validator = function(str){
  var array = str.split('');
  var stack = [];
  var x;

  for (x=0;x<array.length;x++){
    var ch = array[x];
    if(opener[ch]){
      stack.push(ch);
    } else if (ch==='}'||ch===')'||ch===']'){
      if(opener[stack.pop()]!== ch){
        return false;
      }
    }
  }
  return stack.length===0;
};

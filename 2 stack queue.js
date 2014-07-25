var stackQueue = function(){
  var instack = [];
  var outstack = [];

  this.enqueue = function(val){
    instack.push(val);
  };

  this.dequeue = function(val){
    if(!outstack.length){
      length = instack.length;
      for (var x=0;x<length;x++){
        outstack.push(instack.pop());
      }
    }
    return outstack.pop();
  };
};

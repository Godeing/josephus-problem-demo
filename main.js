//self-defined node and singly circular linkedlist
var Node = function(element){
  this.element = element;
  this.next = null;
};
var LinkedList = function(){
  this.head = new Node();
  this.head.next = this.head;
  this.findPrev = function(item){
    var prev, node = this.head;
    while(node.next!==this.head){
      prev = node;
      node = node.next;
      if(node===item)
        return prev;
    }
    return -1;
  };
  this.append = function(item){
    var node = this.head;
    while(node.next!==this.head){
      node = node.next;
    }
    item.next = node.next;
    node.next = item;
  };
  this.remove = function(item){
    var prev = this.findPrev(item);
    if(prev!==-1){
      prev.next = item.next;
      delete item;
      return true;
    }
    return false;
  }
  this.toString = function(){
    var result = 'head', node = this.head;
    while(node.next){
      node = node.next;
      result += (' > ' + node.element);
    }
    return result;
  }
}
//main
var findSurvivor = function(total, interval){
  var i, l = new LinkedList();
  for(i=1;i<=total;i++){
    l.append(new Node(i));
  }
  console.log('Once upon a time, there\'re ' + total + ' men trapped.');
  console.log('Some of them decided to kill themselves.');
  console.log('While the others would rather not.');
  console.log('Who will survive?');
  var count = 0, left = total, node = l.head.next;
  while(left>=interval){
    var tmp = node;
    node = node.next;
    if(count===2){
      console.log(tmp.element + ' is going to kill himself.');
      l.remove(tmp);
      left--;
    }
    count = (count + 1) % 3;
    if(node===l.head)
      node = node.next;
  }
  console.log('Survivors are: ');
  var tmp = l.head.next;
  while(tmp!==l.head){
    console.log(tmp.element);
    tmp = tmp.next;
  }
}

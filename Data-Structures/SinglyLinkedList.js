//imlementation of node 
class Node {
    constructor(val) {
        this.val = val
        this.nextVal = null
    }
}
//imlementation of Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
//****************instances methods*********************//    
    push(val) {
      const node = new Node(val);  
      if(this.length == 0){
          this.head = node
          this.tail = node
      }else{
          this.tail.nextVal = node
          this.tail = node
      }
      this.length ++
      return this;
    }
    pup() {
        if(this.length ==0) return undefined
        let current = this.head
        let newTail = current
        while(current.nextVal){
            newTail = current
            current = current.nextVal
        }
        this.tail = newTail
        this.tail.nextVal = null
        this.length --
        if(this.length ==0){
            this.head = null
            this.tail = null
        }
        return current
    }
       
}

const l = new SinglyLinkedList()

console.log(l.push("HI"))
console.log(l.push("YOU"))
console.log(l.push("!"))


console.log(l.pup())
console.log(l.pup())
console.log(l.pup())
console.log(l.pup())

console.log(l)

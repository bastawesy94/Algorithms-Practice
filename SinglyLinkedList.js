//imlementation of node 
class Node {
    constructor(val, nextVal) {
        this.val = val
        nextVal = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        }
        else {
            this.tail.nextVal = node
            this.tail = node
        }
        this.length++
        return this
    }
    pup() {
        if (!this.head)
            return undefined

        let current = this.head
        let newTail = current
        while (newTail.nextVal) {
            current = newTail
            newTail = current.nextVal
        }

        this.tail = current
        this.tail.nextVal = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
}

const l = new SinglyLinkedList()
l.push("x")
console.log(l)
l.push("y")
console.log(l)
l.pup()
console.log(l)
l.pup()
console.log(l)


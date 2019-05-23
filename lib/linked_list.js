// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length += 1;

        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let removedNode = this.tail;

        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let head = this.head;
            let tempTail = this.head.next;

            while (tempTail.next !== null) {
                head = tempTail;
                tempTail = tempTail.next;
            }

            head.next = null;
            this.tail = head;
        }

        this.length -= 1;
        return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let oldHead = this.head;
        let newHead = new Node(val);
        newHead.next = oldHead;

        this.head = newHead;

        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        }

        this.length += 1;

        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.length -= 1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === target) {
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length) return null;
        let counter = 0;
        let currNode = this.head;
        while (counter !== index) {
            currNode = currNode.next;
            counter += 1;
        }

        return currNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.get(index)) {
            this.get(index).value = val;
            return true;
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        if (index === 0) {
            this.addToHead(val);
            return;
        }

        let prevNode = this.get(index - 1);
        let nextNode = this.get(index);
        let newNode = new Node(val);

        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined;

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        // removedNode.next = null;

        this.length -= 1;
        return removedNode;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

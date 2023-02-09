class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) {
      this.insertAtHead(value);
      return;
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  print() {
    let output = '';
    let currentNode = this.head;
    while (currentNode) {
      output += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;

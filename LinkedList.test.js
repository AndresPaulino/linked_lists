const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  it('should insert a node at the head of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('when the index is less than 0', () => {
    test('should return null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('should return null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('should return the head', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle of the list', () => {
    test('should return the node at that index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40, 50);

      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

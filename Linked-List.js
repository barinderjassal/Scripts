
// inittially head will be null, list is empty now
function LinkedList () {
    this.head = null;
};

// create a push method on prototype of LinkedList, to add node in it
LinkedList.prototype.push = function (val) {
    var node = {
        value: val,
        next: null
    };

    // now check if head is null, if yes, head will point to node
    if (!this.head) {
        this.head = node;
    } else {
        //if node already present, head will point to current node
        var current = this.head;

        while (current.next) {
            current = current.next;
        }
        
        current.next = node;
    }
};

// create a remove method in the prototype of linkedList to remove node from linked list

LinkedList.prototype.remove = function (val) {
    var current = this.head;

    // if we have to remove the head node, just replace head with next node
    if (current.value === val) {
        this.head = current.next;
    } else {
        var previous = current;

        // if we have to remove from middle
        while (current.next) {
            // if matching node is found
            if (current.value === val) {
                previous.next = current.next;
                break;
            }

            //otherwise just update the previous and current pointer
            previous = current;
            current = current.next;
        }

        // if we have to remove the last node, just make next pointer of second last node to null
        if (current.value === val) {
            previous.next = null;
        }
    }
}

var listObj1 = new LinkedList();
listObj1.push(10);
listObj1.push(20);
listObj1.push(30);


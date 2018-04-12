function Queue () {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
    
    // enqueue is used to insert data
    this.enqueue = function (value) {
        if (value) {
            this.storage[this.count] = value;
            this.count++;
        }
    };
    // dequeue removes the element from queue from front
    this.dequeue = function () {
        if (this.count - this.lowestCount === 0) {
            return 'Queue is empty';
        } else {
            var result = this.storage[this.lowestCount];
            delete this.storage[this.lowestCount];
            this.lowestCount++;
            return result; // element which is dequeued
        }
    };
    // size method return the length of the queue
    this.size = function () {
        return this.count - this.lowestCount;
    }
};

var q2 = new Queue();

/*
==================== Other Approach  =====================
*/

function Queue () {
    this.count = 0;
    this.head = null;
    this.tail = null;
    
    this.getCountOfQueue = function () {
        return 'Queue has ' + this.count + ' elements';
    };
    // this method adds the element in a queue
    this.enqueue = function (data) {
        // create a node containing data and next pointer
        var node = {
            data: data,
            next: head
        }
        // if the entry is first entry in queue
        if (this.head == null) {
            this.tail = node;
        }
        
        // inserted node will be head of the queue
        this.head = node;
        
        // increase the count
        this.count++;
    };
    
    // this method removes the element from queue
    this.dequeue = function () {
        if (this.count === 0) {
            return 'Queue is empty';
        } else {
            var current = this.head;
            var previous = null;
            
            // while current.next != null, travers the loop.
            // current will be at the end of the queue and previous as the one before the last
            while (current.next) {
                previous = current;
                current = current.next;
            }
             // if there is more than 1 item in the queue
            if (count > 1) {
                // previous has reached to the last item, so its next will be null
                previous.next = null;
                
                // tail will be previous node, which has next pointer as null
                this.tail = previous;
            } else {
                this.head = null;
                this.tail = null;
            }
            
            this.count--;
        }
        this.displayAll = function () {
            if (this.count === 0 && this.head === null) {
                return 'Queue is Empty';
            } else {
                var queueArray = [];
                
                var current = head;
                
                for (var i = 0; i < this.count; i++) {
                    queueArray[i] = current.data;
                    current = current.next;
                }
                return queueArray;
            }
            
        };
    };
}
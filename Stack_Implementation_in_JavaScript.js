/*
 * Implement Data Structures in JavaScript
 *
 */

function Stack () {
    var top = null;
    var count = 0;
    this.getCount = function () {
        return 'stack has : ' + count + ' items';
    };
    // push items in stack
    this.push = function (data) {
        // if data is an array of elements to push
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                var node = {
                    data: data[i],
                    next: null
                }
                node.next = top;
                top = node;
                count++
            }
        } else {
            // create a Node(object) which contains data and pointer to next node
            var node = {
                data: data,
                next: null
            };
            // links the current node to the top node, if the stack is empty, it will have null as reference.
            // top node will always have 'next' pointer as null
            node.next = top;

            //  our inserted node will be on top
            top = node;

            // increase the count
            count++;
        }
    };
    //display the items
    this.display = function () {
        if (top === null) {
            console.log('Stack has no items');
            return null;
        } else {
            /*for (var item in top) {
                console.log(item);
            }*/
            // return the top Object to see the data
            return top;
        }
    }
    // pop the topmost element
    this.pop = function () {
        if (top === null) {
            console.log('Stack has no items to pop');
            return null;
        } else {
            // assign top object to a temp variable
            var temp = top;
            // so next of top will now be top object
            top = top.next;

            if (count > 0) {
                count--;
            }
            console.log(temp.data +' is removed');
            return top;
        }
    }
    // display all elements of stack in an Array
    this.displayAll = function () {
        if (top === null) {
            console.log('Stack is empty');
            return null;
        } else {
            // store all data keys of 'top object' in an array
            var arr = [];

            // Assign the top object to some pointer, like current
            var current = top;

            for (var i = 0; i < count; i++) {
                arr[i] = current.data;
                current = current.next;
            }
            return arr;
        }
    }
};
var ob1 = new Stack();

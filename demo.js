var name = "hello";

var obj = {
    name: 'Internal Obj',
    obj2: {
        name: 'nested obj',
        getNestedName: function () {
            return this.name;
        }
    },
    getName: function () {
        console.log(this.obj2.getNestedName());
        console.log(this.name);
    }
};
obj.getName();

/*
 * simple callback example
 *
 */

function two () {
    return 2;
}
function printOutput (x) {
    console.log(x);
}
printOutput(two());

/*
 * get Day of the Week from partiular date
 *
 */

function getDayOfWeek (dt) {
    var date = new Date(dt),
        getDay = date.getDay();
    switch(getDay) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'invalid date';
    }
}

getDayOfWeek('10/11/2009');

/*
 * 2D Array in JavaScript
 *
 */

function get2DArrayDiagonalSum() {
    var arr1 = [[1,2,3], [4,5,6], [7,8,9]],
        sum1 = 0,
        sum2 = 0;
    for (var i = 0; i< arr1.length; i++) {
        sum1 += arr1[i][i];
        sum2 += arr1[arr1.length-1-i][i];
        
    }
    return Math.abs(sum1-sum2);
}
get2DArrayDiagonalSum();

/*
 * Linked List in JavaScript
 *
 */

function LinkedList (value) {
    this.value = value;
    this.next = null;
}

var head = new LinkedList('First'),
    middle = new LinkedList('Second'),
    last = new LinkedList('Third');

head.next = middle;
middle.next = last;
last.next = null;

console.log(head);

/*
 * Map Function in JavaScript
 *
 */

var a = '1 2 3 4';
var r = [];
a = a.split(' ');
a = a.map(function(x) {
	return Number(x);
}).reverse();

/*
 *  Session Storage
 *
 */

if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function() {
    debugger;
  
  // window object
  var win = window.top || window;
   
  // session store
  var store = (win.name ? JSON.parse(win.name) : {});
   
  // save store on page unload
  function Save() {
    win.name = JSON.stringify(store);
  };
   
  // page unload event
  if (window.addEventListener) window.addEventListener("unload", Save, false);
  else if (window.attachEvent) window.attachEvent("onunload", Save);
  else window.onunload = Save;
 
  // public methods
  return {
   
    // set a session variable
    set: function(name, value) {
      store[name] = value;
    },
     
    // get a session value
    get: function(name) {
      return (store[name] ? store[name] : undefined);
    },
     
    // clear session
    clear: function() { store = {}; },
     
    // dump session data
    dump: function() { return JSON.stringify(store); }
  
  };
  
 })();


/*
 *  read multi line input
 *  First digit denotes number of Test cases
 *  Rest all numbers are input for each test case
 */

function multiLine(str) {
    var strArray = str.split('\n');
    var result = [];
    
    for (var i = 0; i <strArray.length; i++) {
        result.push(parseInt(strArray[i].trim()));
    }
    
    var factArray = [];
    var testCases = result.shift();
    
    for (j = 0; j < result.length; j++) {
        function fact (n) {
            var factorial = n;
            for (var k = 1; k < n; k++) {
                factorial = k * factorial;
            }
            factArray.push(factorial);

        }
        fact(result[j]);
    }
    
    for (var i = 0; i < factArray.length; i++) {
        console.log(factArray[i]);
    }
}

var str = `2
            3
            5`;
multiLine(str);


/*
 * deleting duplicate elements from array using indexOf
 *
 */

Array.prototype.uniqueArray = function (arr) { 
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        debugger;
        if (result.indexOf(num) === -1) {
            result.push(num);
        }
    }
    return result;
}
uniqueArray([1,2,5,2,1]);


/*
 * Intersection of two arrays
 *
 */

function getIntersection (arr1, arr2) {
    var intersectionArray = [];

    for (var i = 0; i < arr1.length; i++) {
        var temp = arr1[i];
        for (var j = 0; j < arr2.length; j++) {
            if (temp === arr2[j]) {
                intersectionArray.push(arr2[j]);
            }
        }
    }
    return intersectionArray;
};

getIntersection([1,2,3,4], [3,4,5,6]);



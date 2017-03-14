var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World!");
alert("Hello World!");
// type
var num = 100;
var flag = true;
var myStr = "string";
var myArrNum = [1, 2, 3];
var myArr = [1, 2, 3, "string"];
var str = '1';
var str2 = str; //str is now of type number
console.log(str2);
//------------------------------------------------------------------------------
// Union
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
//------------------------------------------------------------------------------
//Tuple
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size
mytuple.push(12); // append value to the tuple
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
//------------------------------------------------------------------------------
// Variable Scope
var global_num = 12; //global variable
var Numbers = (function () {
    function Numbers() {
        this.num_val = 13; //class variable
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable
    };
    return Numbers;
}());
Numbers.sval = 10; //static field
console.log("Global num: " + global_num);
console.log("Numbers.sval " + Numbers.sval); //static variable
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
//------------------------------------------------------------------------------
// Operators
var x = 4;
var y = -x;
console.log("value of x: ", x); //outputs 4
console.log("value of y: ", y); //outputs -4
var msg = "hello " + "world";
console.log(msg);
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
//------------------------------------------------------------------------------
// Loop
var n = 1;
while (n < 5) {
    console.log(n);
    n++;
}
do {
    console.log(n);
    n++;
} while (n < 5);
//------------------------------------------------------------------------------
//Enum
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
var radius = 10;
console.log("Finding circumference of circle");
console.log(2 * myConstants.pi * radius);
//------------------------------------------------------------------------------
// Function
function getAverage(a, b, c) {
    var total = a + b + c;
    var average = total / 3;
    return "The average is " + average;
}
console.log(getAverage(10, 20, 30));
//------------------------------------------------------------------------------
// Default Arguments
function concatenate(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}
var items = ['A', 'B', 'C'];
var result = concatenate(items);
console.log(result);
//------------------------------------------------------------------------------
// Optional Arguments
function areaOfSquare(side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return side * side;
}
console.log(areaOfSquare(5.25));
console.log(areaOfSquare(5.21, true));
//------------------------------------------------------------------------------
// Optional Parameters in Function
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//------------------------------------------------------------------------------
// Rest Parameters in Function
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//------------------------------------------------------------------------------
// Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var x1 = myFunction(4, 3);
console.log(x1);
//------------------------------------------------------------------------------
//Lambda Function
var foo = function (x) { return 10 + x; };
console.log(foo(100)); //outputs 110
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
var person = {
    name: 'Jae',
    heightInCentimeters: 175
};
console.log(person);
// The array is typed using the Monument interface
var monuments = [];
// Each item added to the array is checked for type compatibility
monuments.push({
    name: 'Statue of Liberty',
    heightInMeters: 46
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});
function compareMonumentHeights(a, b) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}
// The array.sort method expects a comparer that accepts two Monuments
var monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
// Get the first element from the array, which is the tallest
var tallestMonument = monumentsOrderedByHeight[0];
console.log(tallestMonument.name); // Peter the Great
//------------------------------------------------------------------------------
// Class
var Car = (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    //getter
    //get carName(){
    //   return "getter car name  :   "+this.engine
    //}
    //setter
    //set carName(name : string){
    //   this._carName = name;
    //}
    //function
    Car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return Car;
}());
//create an object
var carObj = new Car("XXSY1");
//access the field
console.log("Reading attribute value Engine as :  " + carObj.engine);
//access the function
carObj.disp();
//------------------------------------------------------------------------------
// Class Inheritance
var Shape = (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
var otherobj = new Circle(223);
otherobj.disp();

console.log("Hello World!");
alert("Hello World!");

// type
var num : number = 100;
var flag : boolean = true;
var myStr : string = "string";
var myArrNum : number[] = [1, 2, 3];
var myArr : any[] = [1, 2, 3, "string"];
var str = '1'
var str2:number = <number> <any> str   //str is now of type number
console.log(str2)
//------------------------------------------------------------------------------
// Union
var val:string|number
val = 12
console.log("numeric value of val "+val)
val = "This is a string"
console.log("string value of val "+val)
//------------------------------------------------------------------------------
//Tuple
var mytuple = [10,"Hello","World","typeScript"];
console.log("Items before push "+mytuple.length)    // returns the tuple size

mytuple.push(12)                                    // append value to the tuple
console.log("Items after push "+mytuple.length)
console.log("Items before pop "+mytuple.length)
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item

console.log("Items after pop "+mytuple.length)
//------------------------------------------------------------------------------
// Variable Scope
var global_num = 12          //global variable
class Numbers {
   num_val = 13;             //class variable
   static sval = 10;         //static field

   storeNum():void {
      var local_num = 14;    //local variable
   }
}
console.log("Global num: "+global_num)
console.log("Numbers.sval "+ Numbers.sval)   //static variable
var obj = new Numbers();
console.log("Global num: "+obj.num_val)
//------------------------------------------------------------------------------
// Operators
var x:number = 4
var y = -x;
console.log("value of x: ",x);   //outputs 4
console.log("value of y: ",y);   //outputs -4

var msg:string = "hello "+"world"
console.log(msg)

var num:number = -2
var result:string = num > 0 ?"positive":"non-positive"
console.log(result)
//------------------------------------------------------------------------------
// Loop
var n:number = 1
while(n < 5) {
   console.log(n);
   n++;
}
do {
   console.log(n);
   n++;
}
while(n < 5)

//------------------------------------------------------------------------------
//Enum
enum myConstants {
  pi = 3.14,
  e = 2.73,
  log2 = 0.3,
  log5 = 0.7
}
var radius : number = 10;
console.log("Finding circumference of circle");
console.log( 2 * myConstants.pi * radius);
//------------------------------------------------------------------------------
// Function
function getAverage( a:number, b:number, c:number):string{
  var total = a + b+ c;
  var average = total / 3;
  return "The average is " + average;
}
console.log(getAverage(10,20,30))
//------------------------------------------------------------------------------
// Default Arguments
function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length ):string {
  let result = '';
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
function areaOfSquare(side:number, isInteger?:boolean):number{
  if(isInteger){
    return Math.floor(side * side);
  }
  return side * side;
}
console.log(areaOfSquare(5.25));
console.log(areaOfSquare(5.21,true));
//------------------------------------------------------------------------------
// Optional Parameters in Function
function disp_details(id:number,name:string,mail_id?:string) {
   console.log("ID:", id);
   console.log("Name",name);

   if(mail_id!=undefined)
   console.log("Email Id",mail_id);
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");
//------------------------------------------------------------------------------
// Rest Parameters in Function
function addNumbers(...nums:number[]) {
   var i;
   var sum:number = 0;

   for(i = 0;i<nums.length;i++) {
      sum = sum + nums[i];
   }
   console.log("sum of the numbers",sum);
}
addNumbers(1,2,3);
addNumbers(10,10,10,10,10);
//------------------------------------------------------------------------------
// Function Constructor
var myFunction = new Function("a", "b", "return a * b");
var x1 = myFunction(4, 3);
console.log(x1);
//------------------------------------------------------------------------------
//Lambda Function
var foo = (x:number)=>10 + x
console.log(foo(100))      //outputs 110
//------------------------------------------------------------------------------
// Function overloading
function disp(s1:string):void;
function disp(n1:number,s1:string):void;

function disp(x:any,y?:any):void {
   console.log(x);
   console.log(y);
}
disp("abc")
disp(1,"xyz");

//------------------------------------------------------------------------------
// Interface
interface Person {
 name: string;
 heightInCentimeters: number;
}
var person: Person = {
 name: 'Jae',
 heightInCentimeters: 175
}
console.log(person);
//------------------------------------------------------------------------------
// Typed Array
interface Monument {
 name: string;
 heightInMeters: number;
}
// The array is typed using the Monument interface
var monuments: Monument[] = [];
// Each item added to the array is checked for type compatibility
monuments.push({
 name: 'Statue of Liberty',
 heightInMeters: 46,
});
monuments.push({
 name: 'Peter the Great',
 heightInMeters: 96
});
monuments.push({
 name: 'Angel of the North',
 heightInMeters: 20
});
function compareMonumentHeights(a: Monument, b: Monument) {
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
class Car {
  _carName : string;

   //field
   engine:string;
   //constructor
   constructor(engine:string) {
      this.engine = engine
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
   disp():void {
      console.log("Function displays Engine is  :   "+this.engine)
   }
}

//create an object
var carObj = new Car("XXSY1")
//access the field
console.log("Reading attribute value Engine as :  "+carObj.engine)
//access the function
carObj.disp()
//------------------------------------------------------------------------------
// Class Inheritance
class Shape {
   Area:number

   constructor(a:number) {
      this.Area = a
   }
}

class Circle extends Shape {
   disp():void {
      console.log("Area of the circle:  "+this.Area)
   }
}

var otherobj = new Circle(223);
otherobj.disp()

///////////////////////////////////////////////////////////////////////////////////
//******************ARRAY************* */
var fish = ['one','two','three','four','five'];
var arr = ['six','seven','eight','nine'] ;

// let a = fish.concat(arr);     //concat two string
// console.log(a);
// console.log(fish.join(arr));  //joining two string unlike concat

// console.log(fish.slice(2,4));  // from 2nd index to 4th index
// console.log(a.indexOf('five'));// first occurance 
// console.log(fish.pop());          // pop last elenment

// console.log(fish.splice(2));      //returns  2 elements
// console.log(fish.fill('aaaa'));    //replaces all elements with given
// console.log(arr.sort());             //sort all array alphabetically 
// console.log(arr.shift());             //returns first element

// console.log(arr.push('ten'));          //push given element to last



var items =[12,45,77,89,56,23,14,15,25,36,46,58,69,70];
items.forEach(fun);                   
function fun(a,b){
  console.log("array element is "+(a)+' and its index is '+(b));
}

// items.forEach(fun);                                    //array.forEach(function_name)
// function fun(a,b){                                     //fun(element,index)
//     let aa = " ";                                      //local variable declaration null valued
//     aa += a+b +' ';                                     //element + index
//     console.log(aa);
// }



// console.log(items.reduce(aa));                //accepts the function name
// function aa(total,num){                       // function takes 2 parameters
//     return total + Math.round(num);           //Math.round(num) hold value of items 
// }

//************************************************** */

// const numbers2 = items.map(myFunction);
// function myFunction(value) {
//     return value + 1;
//   }
//   console.log(numbers2);

  //**************************************************

// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);

// function myFunction(value) {
// let txt = "";
// txt += value + " ";
// console.log(txt);
// }

//********************************************** */

// let printfish = items.map((item)=>{
//     if (item % 2 == 0) {
//         return item
//     } else {
//         return 'odd';
//     }
// });
// console.log(printfish);

//******************************************** */

// var items =[12,45,78,89,56,23,14,25,36,47,58,69];
// let printfishh = items.filter((item)=>{
//     if (item % 2 == 0) {
//         return item
//     } else {
//         return 'odd';
//     }
// });
// console.log(printfish);

//*********************************************** */

// let fishp = fish.filter(creature => {
//     return creature[0] == 's';
// });
// console.log(fishp);

//***************************************** */

// let aa=items.reduce((a,b)=>{
//     return a+b;
// });
// console.log(aa);




////////////////////////////////////////////////////////////////////////////////////////////////////
//            STRING
//  var a = "javascript is very bad and tough ....!";
//  var b = 'javascript is like hell     ......!';
//  var c = 'java is good "but javascript is very very bad"....!';
// var d = "i was know about 'javascript' also then i come here.......!";
// var e = "so at last \"trying to learn \" this dirt....!";
// var f = 'so at last \"trying to learn \" this dirt....!';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log("java"+"script");
// let s =a.length;
// console.log(s);

// let n = c.replace("bad", " badass");
// console.log(n);

// let m=a.concat(c);
// console.log(m);

// console.log(c.indexOf('javascript'));
// console.log(a.search('bad'));
// console.log(c.includes('javascript'));

// console.log(a.startsWith("javascript"));
// console.log(a.startsWith("javascript"));
// console.log(a.charAt(5));

// console.log(m.split("!"));
// console.log(m.join("*"));
// let bb = b.trim();
// console.log(bb);


// const x = 'subject :  is ${a}  and  ${b}';
// console.log(x);

// const p = 8;
// const q = 9;
// const bbb = `'addition is ${p} and ${q} is ${p+q}'`;
// console.log(bbb);

// const aa = 
// `so at last \"trying to learn \" this dirt....!
// i was know about 'javascript' also then i come here.......!`
// ;
// console.log(aa);
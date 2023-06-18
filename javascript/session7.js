let user = {
    name:'prashant',
    age:'21',
    phone:'123123123'
}
//*********object to string */
// console.log(user.toString());

//*********object to number */
// console.log(user.age.number);

//***************string interpolation */
// console.log(`'my name is ${user.name} and i am ${user.age} years old'`);
// console.log(user);

// let temp = user;
// console.log(temp);

// user.name='tushar';
// console.log(user);
// console.log(temp);

// let c = 'prashant';
// console.log(c);

// let d = c;
// // console.log(d);

// c='aaa';
// console.log(c);
// console.log(d);


//******************spread syntax (assign a object to another object) 
// let temp = {
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// let temp2 = {...temp};
// console.log(temp);

//*************************object.assign */
let a = {
    one:'prashant',
    two:'kharade',
    three:'pandurang'
}
let b = {
    a:1,
    b:2,
    c:3
}
var e = {};
Object.assign(e,b,a);
console.log(e);

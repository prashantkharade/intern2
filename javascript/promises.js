// //********producing code*************/
// let promisname = new Promise(function(resolve,reject){
//     resolve()    // when successful
//     reject()     // when error
// });

// //***********consuming code**********/
// promisename.then(
//     function(value){
//         //code when successful
//     },
//     function(error){
//         // code when error
//     }
// )


function myd(some){
    console.log('some');
}
let myp = new Promise(function(myresolve,myreject){
    let x =0;
    if(x==0){
        myresolve("OK");
    } else{
        myreject("ERROR");
    }
});
 
myp.then(
    function(value){
        myd(value);
    },
    function(error){
        myd(error);
    }
);
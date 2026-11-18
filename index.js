// // // // function add(a,b){
// // // //     return a+b;
// // // // }
// // // // console.log("add,a+b")

// // // console.log("one");
// // // console.log("two");
// // // console.log("three");
// // // setTimeout(function(){
// // //     console.log("hello after 5 seconds");
// // // },5000);
// // // console.log("four");
// // // console.log("five");    
// // //  setTimeout(()=>{
// // //     console.log("hello after 3 seconds");
// // // },3000);

// // //3. real life example of asynchronous code
// // function welcome(){
// //     console.log("welcome to javascript");
// // }
// // setTimeout(welcome,2000);


// function greet(name){
//     console.log("Hello" + name);
// }
// setTimeout(greet,2000,"John");

function greet(f_name,l_name){
    console.log("Hello" + f_name + " " + l_name);
}
setTimeout(greet,2000,"John","Doe");    

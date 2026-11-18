// // // // function hello() {
// // // //     console.log("hello");
// // // // }
// // // // //hello();
// // // // setTimeout(hello, 3000); 

// // // console.log("one");
// // // console.log("two");
// // // setTimeout(() => {
// // //     console.log("hello");
// // // }, 5000);
// // // console.log("three");
// // // console.log("four");

// // function getData(getDataId) {
// //     setTimeout(() => {
// //        console.log("data", dataId)}, 3000);
// // }

// // getData(1);
// // getData(2);
// // getData(3);

// function getData(dataId,getNextdata) 
// {
//     setTimeout(() => { console.log("data", dataId)}, 3000);
//         getNextdata();
// }
// getData 1,() => {
//     getData(2,() => {
//         getData(3,() }
//     }

// function getData(dataId){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve();
//         }, 3000);
//     }); 
// }


// async function hello() {
//     console.log("hello!!");
// }


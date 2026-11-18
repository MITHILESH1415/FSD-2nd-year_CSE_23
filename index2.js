// // // //asynchronise function 
// // // const.fs = require('fs');
// // // console.log('start');

// // // fs.readFile('file.txt', 'utf8', (err, data) => {
// // //     if (err) {
// // //         console.error(err);
// // //         return;
// // //     }
// // //     console.log(data);
// // // });

// // // console.log('end'); 


// // //callback function
// // function greet(name, callback) {
// //     console.log('Hello ' + name);
// //     callback();
// // }

// // function sayBye() {
// //     console.log('Goodbye!');
// // }

// // greet('mithilesh', sayBye);


// //simple example of callback hell
// loginUser('mithilesh', function (user) {
//     getUserDetails(user, function (details) {
//         getOrders(details, function (orders) {
//             getOrdersDetails(orders, function (orderDetails) {
//                 console.log(orderDetails);
//             });
//         });
//     });
// });


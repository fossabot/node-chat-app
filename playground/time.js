var moment = require('moment');

// var date = moment();
// date.add(1, 'year');
// console.log(date.format('dddd MMMM Do, YYYY'));

// Jan 1st 1970 00:00:00 am is the Unix Epoch

//-1000 is dec 31 1969
//1000 is dec 31 1971
 // var date = new Date();
 // console.log(date.getMonth());

// 10:35 am
// padded 6:01 am

var date = moment();
// var plusTwelve = date.add(12,'hours');

console.log(date.format('h:mm a z'));
// console.log(plusTwelve. format('h:mm a'));

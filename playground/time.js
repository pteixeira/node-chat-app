// jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

var moment = require('moment');
var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

// 5:28 pm
console.log(date.format('h:mm a'));
var someTimestamp = moment().valueOf();
console.log(someTimestamp)

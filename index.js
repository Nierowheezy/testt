// var countyName = "Owen Sound/Walkerton";
// var result = countyName
//     .trim()  //might need polyfill if you need to support older browsers
//     .toLowerCase()  //lower case everything
//     .replace(/([^A-Z0-9]+)(.)/ig, //match multiple non-letter/numbers followed by any character
//         function(match) {
//             return arguments[2].toUpperCase();  //3rd index is the character we need to transform uppercase
//         }
//     );
//     console.log(result);

var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(time);

//entry -> output
const path = require('path')  //require is node build-in function
console.log(path.join(__dirname, 'public')); //it gives the path where the folder is
//join two global path and local path, we will with actual final path we want
///Users/florence/Documents/Projects/indecision-app/public

module.exports = {
 //all configuration details
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //absolute path(can't use ./) where we wanna output that bundle file,
        filename: 'bundle.js' //anyname we want
    }

};
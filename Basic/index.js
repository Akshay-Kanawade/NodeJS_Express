const {add, div} = require('./module')


console.log('add',add(10,30))

try{
    console.log('div',div(1,0))
}catch(error){
    console.log('error',error);
}
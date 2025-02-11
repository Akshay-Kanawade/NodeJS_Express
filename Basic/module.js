

const add = (a,b) =>{
    return a+b
}

const div = (a,b) =>{
    if(b === 0){
        return new Error("not able to divide by 0");
    }
    return a/b
}

module.exports = {add, div}
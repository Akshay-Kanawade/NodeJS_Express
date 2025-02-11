console.log('module wraper')

console.log('__dirname',__dirname);
console.log('__filename',__filename);

module.exports.logging = (demo)=>{
    console.log(demo);
}
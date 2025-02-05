# NodeJS_Express

What is NodeJS : 
    js Engine -> v8 (chrome)
    node -> v8 + cpp embaded (execute js outside of the browser)
    can create webserver 
    runtime env for js
   runs single-threaded, non-blocking, asynchronous programming, 


Node js installation : 
    lts -long term support (stable) - used for prod - starts with even number
    current - current features (beta) - starts with odd number
    check - > node --version

    NPM - node package manager
    NPX - node package runner

    run node file -> node filename

Node Js Module : 

module -> js library (set of fun )
   built-in -> asert, buffer, events, fs,http / https, net (server and client creation), os, path, querystring, url, util,vm,timers,stream(streaming data),readline etc

    how to include module :  import -> var fss = require('fs) and use inbuilt fun to perform operation.

create custom module : 
create file and export fun
   var dt = require('filepath)
   use  dt.fun()



HTTP module :
  http module -> create server -> use callback fun -> params req & res -> req - client , res- server -> use url moule -> extract query from url, get url -> req.url 

file system  module :
    http.createServer(fun(req,res){
        fs.readFile(filepath,callback(err,data)return res)
    }).listen(8080);

    appendfile -> add content or create new
    open -> flag -> w -write / create new file
    writeFile -> replace content
    unlink -> delete
    renamee() -> rename
URL module : 
    url.parse(req.url, true) -> host, pathname, search(query param),query(query obj)

events module : 
create-, fire-, and listen for- your own events
    var events = require('events');
var eventEmitter = new events.EventEmitter();
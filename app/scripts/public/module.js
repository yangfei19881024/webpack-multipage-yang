function default_module(){
  console.log("default_module");
}

function test(){
  console.log("test fun");
}

function test1(){
  console.log("test1 fun");
}

export {default_module as default,test,test1}

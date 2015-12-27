/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// var arr = ["a","b","c","a"];
	//
	// var newarr = Array.from(new Set(arr));
	//
	// console.log(newarr);
	// var name = "yangfei";
	//
	// var obj2 = {
	//   name:"hahha"
	// }
	//
	// var obj = [
	//   {id:"1",name:"yang"},
	//   {id:"2",name:"tom"},
	//   {id:"3",name:"jack"},
	//   {id:"4",name:"haha"},
	// ];
	//
	// var obj2 = {
	//   name:"yagnfei",
	//   id:"110",
	//   age:12,
	// }
	//
	// for( item in obj2 ){
	//   console.log(obj2[item]);
	// }

	// class MyClass {
	//   constructor(name) {
	//     // ...
	//     this.name = name
	//   }
	//   get name() {
	//     return 'getter';
	//   }
	//   set name(value) {
	//     this.name = value;
	//     console.log('setter: '+value);
	//   }
	// }
	//
	// let inst = new MyClass("yang");
	//
	// inst.name = 123;
	// // setter: 123
	//
	// console.log(inst.name);
	//

	// obj.say.apply(obj2);

	//==========promise===========
	function promise_fun(){
	  return new Promise(function(resolve,reject)  {
	    fetch('https://api.douban.com/v2/movie/top250?count=10&start=20')
	      .then(function(response)  {return response.json();})
	      .then(function(responseData)  {
	        resolve(responseData);
	      })
	      .done();
	  })
	}


	promise_fun()
	.then(function(data)  {
	  console.log(data);
	})
	.catch(function()  {
	  console.log("error");
	});

	console.log("other process");


/***/ }
/******/ ]);
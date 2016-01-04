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
// function promise_fun(){
//   return new Promise((resolve,reject) => {
//     fetch('https://api.douban.com/v2/movie/top250?count=10&start=20')
//       .then(response => response.json())
//       .then(responseData => {
//         resolve(responseData);
//       })
//       .done();
//   })
// }
//
//
// promise_fun()
// .then((data) => {
//   console.log(data);
// })
// .catch(() => {
//   console.log("error");
// });
//
// console.log("other process");

// function readFilePromise(filename){
//   return new Promise((resolve,reject) => {
//     fetch('./goodlist.js')
//       .then(response => response.json())
//       .then(responseData => {
//         resolve(responseData);
//       })
//       .done();
//   })
// }
//
// readFilePromise('./goodlist.js')
// .then(data => {
//   console.log(data);
// })
// .catch(err = >{
//   console.log(err);
// })
"use strict";
import Util from "./public/utils";
import $ from "jquery";

require("../styles/index.css");

var bookListingTemplate = require("../handlebars/index.handlebars");

var indexTpl	 = bookListingTemplate({
		username: "test",
		books: [
			{ title: "A book two bookss", synopsis: "With a description" },
			{ title: "Another book", synopsis: "From a very good author" },
			{ title: "Book without synopsis" }
		],
	});

$("#userlist").append(indexTpl);

var linkTemplate = require('../handlebars/links.handlebars');

var indextext = "点击首页";

$("#linklists").append(
	linkTemplate({
		indextext: indextext,
		indexlink: "http://www.baidu.com",
		hometext: '主页',
		homelink: 'http://sina.com',
	})
);

//=======引入第三方插件======

import swipe from "./public/swiperInit";
swipe({
	speed: 400,
})

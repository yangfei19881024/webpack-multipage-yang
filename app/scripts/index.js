"use strict";
// import Util from "Util";
import util from "./public/utils";

new util().getSth();

// import $ from "jquery";

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
	callback:(index,elem)=>{
		console.log(index);
	}
})

console.log("--lodash--");
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

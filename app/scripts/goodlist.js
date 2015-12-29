"use strict";
import Util from "./public/utils";
import $ from "jquery";
require('../styles/goodlist.css');

var linkTemplate = require('../handlebars/links.handlebars');

var indextext = "点击列表首页";

$("#linklists").append(
	linkTemplate({
		indextext: indextext,
		indexlink: "http://www.baidu.com",
		hometext: '列表主页',
		homelink: 'http://sina.com',
	})
);

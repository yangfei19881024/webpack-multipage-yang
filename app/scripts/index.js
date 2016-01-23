import $ from "zepto";

require("./libs/sui.js");

$(document).on('click','.alert-text',function () {
	 $.alert('Here goes alert text');
});

$(document).on('click','.alert-text-title', function () {
	//  $.alert('Here goes alert text', 'Custom Title!');
	  $.showIndicator();

		setTimeout(()=>{
			$.hideIndicator();
		},2000) //消失
});

$(document).on('click', '.alert-text-title-callback',function () {
	 $.alert('确定要删除吗!','提示', function () {
			 $.alert('Button clicked!')
	 });
});

$(document).on('click', '.alert-text-callback',function () {
	 $.alert('Here goes alert text', function () {
			 $.alert('Button clicked!')
	 });
});

//========日历==========
// $("#my-input").calendar({
//     value: ['2015-12-05']
// });

//========选择============
$(document).on('click','.create-actions', function () {
	var buttons1 = [
	{
	  text: '请选择',
	  label: true
	},
	{
	  text: '卖出',
	  bold: true,
	  color: 'danger',
	  onClick: function() {
	    $.alert("你选择了“卖出“");
	  }
	},
	{
	  text: '买入',
	  onClick: function() {
	    $.alert("你选择了“买入“");
	  }
	}
	];
	var buttons2 = [
	{
	  text: '取消',
	  bg: 'danger'
	}
	];
	var groups = [buttons1, buttons2];
	$.actions(groups);
})

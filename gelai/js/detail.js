$(function(){
	var goods=data.goods;
	for(var i=0;i<goods.length;i++){
		$('<div class="cart_list" title='+goods[i].id+
		'><div class="cart_hd"><input type="checkbox" name="" id="" value="" /><em>C#基础编程</em></div><div class="cart_items"><dl><dt><img src='+goods[i].imgUrl+
		'/></dt><dd>名称：'+goods[i].title+
		'</dd><dd>简介：当你第一次见c#时，千万不要将它傻傻的读成C#号”······</dd><dd>定价：<span class="price">'+goods[i].price+
		'</span></dd><dd class="icon del_item"><a href="#"></a></dd></dl></div><div class="subtotal"><span class="total_price">小计：￥<em>'+goods[i].price+
		'</em></span><span class="count"><a class="icon left" href="#"></a><input type="number" name="num" id="num" value="1" ><a href="#" class="icon rigth"></a></span></div></div>').appendTo(".container")
	}
	
//	找标签	
	$(".rigth").click(function(){//点击
		var countN = $(this).siblings("input"); //找到兄弟标签 input
		var valO = parseInt(countN.val()) //获取input原来的值
		var valN = valO + 1; //值加1
		console.log(valN)
		countN.val(valN); //把新值赋值回去
		//获取单价 ----通过jq对象的遍历找到标签--根据自己的代码来找，跟我的不一定一样
		var price = parseFloat($(this).parents().siblings(".cart_items").find(".price").text());
		console.log(price)
		//计算小计
		var subprice = price * valN;
		//小计赋值
		$(this).parent().prev().children("em").text(subprice)
		add();
		return false; //既可以阻止事件传播  也可以阻止默认行为
		//		countN.val(parseInt(countN.val())+1);
	})
	
	$(".left").click(function() { //点击  -  
		var countN = $(this).siblings("input"); //找到兄弟标签 input
		var valO = parseInt(countN.val()) //获取input原来的值
		if(valO > 0) { //加点条件
			var valN = valO - 1; //值减1
			countN.val(valN); //把新值赋值回去
			//获取单价
			var price = parseFloat($(this).parents().siblings(".cart_items").find(".price").text());
			//计算小计
			var subprice = price * valN;
			//小计赋值
			$(this).parent().prev().children("em").text(subprice);
			add()
			return false; //既可以阻止事件传播  也可以阻止默认行为
			//		countN.val(parseInt(countN.val())+1);
		}
	})

	
//	事件处理-删除
	$(".del_item a").click(function(){
		var boo=confirm('确定要删除吗')
		if (boo) {
			$(this).parents(".cart_list").remove()
			return false
		}
		
	})
	
	
//全选
	$("#allCheck").click(function(){
		$(".container input:checkbox").prop("checked",this.checked)		
		add()
//		console.log(add())
	})

/*
 表单专用选择器
 
 1，checked 多选单选选中状态
 2，selected 下拉菜单 选中状态
 3， disable 被禁止状态 
 4， enable 可以使用的 正常的
 
 * */
/*事件处理---反向全选--*/
	//表单专用的选择器 input:checkbox:判断类型  input:checked：判断状态-找到被选中的input
	$(".container input:checkbox").click(function(){//找到所有的多选框绑定事件处理函数
		var allL = $(".container input:checkbox").length;//获取多选框的长度
		var cheL = $(".container input:checked").length;//获取所有的被选中的多选框的长度
		if(allL==cheL){
			$("#allcheck").prop("checked",true)//如果长度一样，就说明已经全选
		}else{
			$("#allcheck").prop("checked",false)
		}
		add();
	}).trigger("click")//页面打开的时，手动触发一次这个事件
	

//封装函数-实现小计累加 ---这个函数要在以下几种情况调用---在以下几种情况的事件处理函数最后调用此函数
	/*
	 * 1.多选框被点击时
	 * 2.进行加减时
	 * 3.点击选中所有时
	 
	 * */
	function add(){
		//找到所有的备选中的多选框----取出和他相关的小计值----小计值累加
		var allTotle = 0;
		
		//使用each()---循环取值---根据jq对象的长度实现循环，会执行时会自动传入索引值
		$(".container input:checked").each(function(index){
			var a = $(".container input:checked").eq(index);
			var aN=parseInt(a.parent().siblings(".subtotal").find("em").text())
//			console.log(aN);
			allTotle = allTotle + aN;
//			console.log(allTotle)
		})
		//把累加结果放在总计处
		$("#totPirce").text(allTotle)
	}
})
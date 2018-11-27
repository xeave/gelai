$(function(){
	var goods=data.goods;
	for(var i=0;i<goods.length;i++){
		$('<a href="detail.html"><div class="cart_list"><div class="cart_items"><dl><dt><img src='+goods[i].imgUrl+
		'/></dt><dd>'+goods[i].title+
		'</dd><dd>当你第一次见c#时，千万不要将它傻傻的读成C#号”······</dd><dd><span class="price">'+goods[i].price+
		'</span></dd></dl></div></div></a>').appendTo(".main")
	}
	
	$(".cart_items").click(function(){
		window.open(index.html)
	})

	


})
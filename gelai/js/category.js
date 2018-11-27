$(function() {
	var moreList = $(".brand-list ul li:gt(8)")
	moreList.hide()
	$(".more").click(function() {
		if(moreList.is(":visible")) {
			moreList.slideUp()
			$(".more a").text('显示全部')
		} else {
			moreList.slideDown(200)
			$(".more a").text('显示精简')
		}
	})
})
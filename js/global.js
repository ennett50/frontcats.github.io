$( function() {
// Add background image
	$.backstretch('/images/cover.jpg');
	var endDate = "March  27, 2017 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>дн</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>ч</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>мин</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>сек</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " сек");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});

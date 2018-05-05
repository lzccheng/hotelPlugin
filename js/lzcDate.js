/*
	author: 赖志成 (Lai Zhicheng);
	date: 2018-5-5;
 */
window.lzcDatePlugin = (function(){
	var LzcDatePlugin = function(obj){
		this.obj = obj;
		this.el = document.querySelector(obj.el);
		this.elParent = this.el.parentNode;
		this.init();
	}
	LzcDatePlugin.prototype = {
		init: function(){
			//生成标题
			this.createTitle();
			//生成星期
			this.createDay();

			

		},
		createTitle: function(){
			var lzcTitle = this.obj.title || '选择日期';
			var lzcBox = document.createElement('div');
			lzcBox.setAttribute('class','lzcBox');
			lzcBox.style.width = window.innerWidth + 'px';
			lzcBox.style.height = window.innerHeight + 'px';
			var lzcBoxHtml = '<div class="lzcDateBox">' +
								'<div class="lzcFixed">' +
									'<div class="lzcTitle">' +
										'<span class="lzcIcon">&times;</span>'+
										'<span class="lzcTitle_">' + lzcTitle + '</span>' +
									'</div>' +
									'<div class="lzcDay">' + 
									'</div>' +
								'<div>' +
							'</div>'; 
			lzcBox.innerHTML = lzcBoxHtml;
			this.elParent.appendChild(lzcBox);
		},
		createDay: function(){
			var lzcDay = this.elParent.querySelector('.lzcDay');
			var lzcDayArr = ['日','一','二','三','四','五','六'];
			var lzcDayHtml = '';
			for(var i=0;i<lzcDayArr.length;i++){
				lzcDayHtml += '<span class="lzcDayItem">' + lzcDayArr[i] + '</span>';
			};
			lzcDay.innerHTML = lzcDayHtml;
		}

	}
	return LzcDatePlugin;
})()
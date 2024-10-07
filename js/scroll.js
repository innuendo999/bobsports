/**
 * Created by Administrator on 2018/6/13.
 */
// JavaScript Document// JavaScript Document
//滚动区域
//
(function($){
    "use strict";
    $.fn.extend({
        Scroll:function(opt,callback){
            //参数初始化
            if(!opt) var opt={};
            var _btnLeft = $("#"+ opt.left);//Shawphy:向左按钮
            var _btnRight = $("#"+ opt.right);//Shawphy:向又按钮
            var timerID;
            var _this=this.eq(0).find("ul:first");
            var length =_this.children('li').length;
            if(length<=5){
                return
            }

            var liWidth =_this.find('li:first').outerWidth(true);
            _this.css('width',length*liWidth+"px");
            var Play =opt.Play;
            var lineWidth =opt.lineWidth;
            var line  = opt.line?parseInt(opt.line,10):parseInt(this.width()/lineH,10);
            var speed = opt.speed?parseInt(opt.speed,10):3000; //卷动速度，数值越大，速度越慢（毫秒）
            var timer = opt.timer; //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
            var dir ="right";
            if(line==0) line=1;
            var upHeight=0-line*lineWidth;
            //滚动函数
            var scrollLeft=function(){
                _btnLeft.unbind("click",scrollLeft); //Shawphy:取消向左按钮的函数绑定
                dir ='left';
                autoStop();
                _this.animate({
                    marginLeft:upHeight
                },"normal",'swing',function(){
                    for(var i=1;i<=line;i++){
                        _this.find("li:first").appendTo(_this);
                    }
                    _this.css({marginLeft:0});    //???
                    _btnLeft.bind("click",scrollLeft); //Shawphy:绑定向左按钮的点击事件
                });
                if(Play)    autoPlay(dir);

            };
            //Shawphy:向下翻页函数
            var scrollRight=function(){
                _btnRight.unbind("click",scrollRight);
                dir='right';
                autoStop();
                for(var i=1;i<=line;i++){
                    _this.find("li:last").show().prependTo(_this);
                };
                _this.css({marginLeft:upHeight});
                _this.animate({
                    marginLeft:0
                },'normal','swing',function(){
                    _btnRight.bind("click",scrollRight);
                });
                if(Play)   autoPlay(dir);
            };
            //自动播放
            var autoPlay = function(dir){
                if(dir =='right'){
                    timerID = window.setInterval(scrollRight,timer);
                }else{
                    timerID = window.setInterval(scrollLeft,timer);
                }

            };
            var autoStop = function(){
                if(timerID) window.clearInterval(timerID);
            };
            _btnLeft.css("cursor","pointer").click( scrollLeft )//Shawphy:向上向下鼠标事件绑定
            _btnRight.css("cursor","pointer").click( scrollRight);
            if(Play){
                autoPlay(dir);
                $(_this).mouseenter(function(){
                    autoStop()
                }).mouseleave(function(){
                    autoPlay(dir);
                })
            };
        }
    })
})(jQuery);
//初始化
$(document).ready(function(){
    $(".Hslider").Scroll({line:1,speed:200,timer:2000,left:"btn_prev",right:"btn_next",'lineWidth':220,Play:true,});
});

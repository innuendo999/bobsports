
$(function(){
    $('.top-right li.last').hover(function(){
        $('.top-list').show();
    },function(){
        $('.top-list').hide();
    });
    $('.main-left .cp').click(function(){
        if($(this).siblings('dl').is(':visible')){
            $(this).siblings('dl').hide();
            $(this).removeClass('active');
        }else{
            $(this).siblings('dl').show();
            $(this).addClass('active');
        }
    });
    $('.zp-cn .zw').click(function(){
        if($(this).siblings('.zp-main').is(':visible')){
            $(this).siblings('.zp-main').slideUp();
        }else{
            $(this).siblings('.zp-main').slideDown();
        }
    });
    $('.top-right li.first span').click(function(){
        $(this).hide();
        $(this).siblings('input').show();
        $(this).siblings('a').show();
    });

    var num;
    var len=$(".main-nav a").length;
    $(".main-nav a").click(function(){
        $(this).addClass('on').siblings('a').removeClass('on');
        $(".main-nav a").each(function(index){
            if($(this).hasClass('on')){
                num=index;
            }
        })
        if(num==0){
            $('.prev').addClass('on');
            $('.last').removeClass('on');
        }else if(num==len-1){
            $('.last').addClass('on');
            $('.prev').removeClass('on');
        }else{
            $('.prev').removeClass('on');
            $('.last').removeClass('on');
        }
    });
    $('.prev').click(function(){
        $(".main-nav a").each(function(index){
            if($(this).hasClass('on')){
                num=index;
            }
        });

        $(".main-nav a").eq(--num).addClass('on').siblings('a').removeClass('on');
        if(num==0){
            $('.prev').addClass('on');
        }else{
            $('.last').removeClass('on');
        }

    })
    $('.last').click(function(){
        $(".main-nav a").each(function(index){
            if($(this).hasClass('on')){
                num=index;
            }
        });
        if(num==len-2){
           $('.last').addClass('on');
        }else{
            $('.prev').removeClass('on');
        }
        $(".main-nav a").eq(++num).addClass('on').siblings('a').removeClass('on');

    })
    $('textarea').focus(function(){
        $(this).html(' ').css('color',"#1b1b1b");
    })
})

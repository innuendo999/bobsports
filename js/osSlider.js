/**
 * Created by Administrator on 2016/1/7 0007.
 */
/**
 * osSlider �����ֲ���� v1.0
 * objs ���Ͷ���
 */
function osSlider(objs) {
    var that = this; //that���this�������� ���涼��that ��ֹ����
    that.objs = objs; //���������Ķ�����this
    that.pNode = $(that.objs.pNode); //pNode�ֲ���������
    that.cNodes = that.pNode.find(that.objs.cNode); //cNodes�ֲ��ӽڵ���󼯺�
    that.cNodeNums = that.cNodes.length; //Ԥ���ֲ��������
    that.nowNodeKey = 0; //��ʼ��һ��Ĭ����ʾ�ڵ�Ϊ��һ��
    that.width = that.cNodes.find('img').width();//�õ������Ŀ��
    that.height = that.cNodes.find('img').height();//�õ������ĸ߶�
    that.moveFlag = true;//����Ƿ���Խ�����һ���ֲ�״̬
    that.isPause = false;//�Ƿ���ͣ״̬
    that.speedNum = 0;//�Զ��ֲ��ļ���
    if (!that.objs.speed) {//���Ĭ��ʱ��
        that.objs.speed = 3000;
    }
    if (!that.objs.autoPlay) {//���Ĭ���Զ�����
        that.objs.autoPlay = true;
    }
    that.init = function() {//�ֲ��ĳ�ʼ��
        that.pNode.addClass('osSlider-main');
        that.pNode.css({//�ֲ������Ĵ�С���� ����bfcģʽ
            'width':that.width,
            'height':that.height,
            'overflow':'hidden',
            'position':'relative'
        });
        //�����������л���ť
        var $toggleBtn = $('<ul class="slider-btn"><li class="slider-btn-prev">prev</li><li class="slider-btn-next">next</li></ul>');
        $toggleBtn.appendTo(that.pNode);
        //Ϊ�л���ť���¼�
        $(that.pNode).find('.slider-btn-prev').bind('click',function(){
            that.toggleMove('prev');
        });
        $(that.pNode).find('.slider-btn-next').bind('click',function(){
            that.toggleMove('next');
        });
        //Ϊ�������������ڵ�
        var $navParent = $('<ul class="slider-nav"></ul>');
        $navParent.appendTo(that.pNode);
        that.cNodes.each(function(index, el) {//���ñ��������ǰ��˳��
            if (index==0) {//�õ�һ����ʾ��ǰ�� ͬʱΪÿ���ֲ��崴����Ӧnav��
                var indexNum = 20;
                $navParent.append('<li class="active">'+(index+1)+'</li>');
            } else {
                var indexNum = index;
                $navParent.append('<li>'+(index+1)+'</li>');
            }
            $(this).css({//Ϊÿһ���ֲ��������ʽ��˳��
                'width':that.width + 'px',
                'height':that.height + 'px',
                'overflow':'hidden',
                'position':'absolute',
                'top':'0px',
                'left':'0px',
                'z-index':indexNum
            });
        });
        //Ϊ���������ڵ���¼�
        $(that.pNode).find('.slider-nav li').each(function(index, el) {
            $(this).bind('click',function(){
                that.toggleMove(false,index);
            });
        });
        //�ж��Ƿ��Զ�����
        if (that.objs.autoPlay) {
            that.moveTime();
        }
    }
    /**
     * �л��ֲ��� �ֲ������ĸ���
     * @param {Number} tid
     */
    that.sliderNavToggle = function(tid,nid) {
        $('.slider-nav li').each(function(index, el) {
            if (index==tid||index==nid) {
                $(this).toggleClass('active');
            }
        });
    }
    /**
     * �л�Ч��ָ��� ����BUG
     * @param {String} command 'prev'|'next'
     * @param {Number} tid ��һ��Ҫ�л���tid
     * command��tid����ȱʡһ���������Զ��ж�
     */
    that.toggleMove = function(command,tid) {
        if (that.moveFlag) {
            if (!command) {
                if (that.nowNodeKey==tid) {
                    return;
                } else if ((that.nowNodeKey==0&&tid==that.cNodeNums-1)||tid<that.nowNodeKey) {
                    command = 'prev';
                } else {
                    command = 'next';
                }
            }
            if (!tid) {
                if(tid==0) {
                } else if (command=='prev') {
                    tid = that.nowNodeKey-1;
                    if (that.nowNodeKey==0) {
                        tid = that.cNodeNums-1;
                    }
                } else {
                    tid = that.nowNodeKey+1;
                    if (that.nowNodeKey==that.cNodeNums-1) {
                        tid = 0;
                    }
                }
            }
            /**
             * �������
             */
            function random(min,max) {
                return Math.floor(Math.random()*(max+1)-min);
            }
            that.moveSwitch(random(0,6),command,tid);
        }
    }
    /**
     * ���ݷ�����л�ָ��ִ��Ч��
     * @param {Number} mid ����ָ��
     * @param {String} command 'prev'|'next'
     * @param {Number} tid ��һ��Ҫ�л���tid
     */
    that.moveSwitch = function(mid,command,tid) {
        nid = that.nowNodeKey;
        that.moveFlag = false;
        that.speedNum = 0;
        that.sliderNavToggle(nid,tid);
        switch (mid) {
            case 0:
                that.gridTop(tid,0);
                break;
            case 1:
                that.gridTop(tid,1);
                break;
            case 2:
                that.gridTop(tid,2);
                break;
            case 3:
                that.gridLeft(tid,0);
                break;
            case 4:
                that.gridLeft(tid,1);
                break;
            case 5:
                that.gridLeft(tid,2);
                break;
            case 6:
                that.cellToggle(tid);
                break;
            default:
                that.gridTop(tid);
                break;
        }
    }
    /**
     * դ�������л�
     */
    that.gridTop = function(tid,showNum) {
        that.cNodes[tid].style.zIndex = 19;//���¸��ڵ�׼����
        var $backHTML = that.cNodes[that.nowNodeKey].innerHTML;//���ݵ�ǰ�ڵ������
        that.cNodes[that.nowNodeKey].innerHTML = '';//��սڵ㣬����ʹ��
        for (var i = 0; i < 12; i++) {//����ѭ�� ������դ��ڵ�
            var $cvNode = $('<div class="cvNode"></div>');
            $(that.cNodes[that.nowNodeKey]).append($cvNode);
            $cvNode.html($backHTML);
            $cvNode.css({//Ϊÿ��դ��ڵ����css��ʽ
                'position':'absolute',
                'width':that.width/12+'px',
                'height':that.height+'px',
                'zIndex':20,
                'overflow':'hidden',
                'left':that.width/12*i+'px',
                'top':'0'
            });
            $cvNode.find('*').first().css({
                'display':'block',
                'margin-left':that.width/-12*i+'px'
            });
        }

        //�����ӦЧ��
        switch (showNum) {
            default:
            case 0:
                //��Ӷ�������Ч�� ������צ
                $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                    if (index%2==0) {
                        var topNums = that.height;
                    } else {
                        var topNums = that.height*-1;
                    }
                    $(this).animate({
                        top:topNums + 'px'
                    },1500);
                });
                setTimeout(function(){//����������ʼ�ָ�ԭ��״̬
                    that.moveFlag = true;
                    that.cNodes[tid].style.zIndex = 20;
                    that.cNodes[that.nowNodeKey].style.zIndex = that.nowNodeKey;
                    $(that.cNodes[that.nowNodeKey]).html($backHTML);//������������Ķ�������
                    that.nowNodeKey = tid;//�õ��µĵ�ǰ�ڵ�key
                },1500);
                break;
            case 1:
            //���ݵ�����
            case 2:
                if (showNum==1) {
                    //��Ӷ�������Ч�� �½�
                    $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                        var sp = 80*index;
                        $(this).animate({
                            top: $(this).height() + 'px'
                        },500+sp);
                    });
                } else {
                    //��Ӷ�������Ч�� ����
                    $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                        var sp = 80*index;
                        $(this).animate({
                            top: $(this).height()*-1 + 'px'
                        },500+sp);
                    });
                }
                setTimeout(function(){//����������ʼ�ָ�ԭ��״̬
                    that.moveFlag = true;
                    that.cNodes[tid].style.zIndex = 20;
                    that.cNodes[that.nowNodeKey].style.zIndex = that.nowNodeKey;
                    $(that.cNodes[that.nowNodeKey]).html($backHTML);//������������Ķ�������
                    that.nowNodeKey = tid;//�õ��µĵ�ǰ�ڵ�key
                },1380);
                break;
        }
    }

    /**
     * դ������������צ�л�
     */
    that.gridLeft = function(tid,showNum) {
        that.cNodes[tid].style.zIndex = 19;//���¸��ڵ�׼����
        var $backHTML = that.cNodes[that.nowNodeKey].innerHTML;//���ݵ�ǰ�ڵ������
        that.cNodes[that.nowNodeKey].innerHTML = '';//��սڵ㣬����ʹ��
        for (var i = 0;i<12;i++) {//����ѭ�� ������դ��ڵ�
            var $cvNode = $('<div class="cvNode"></div>');
            $(that.cNodes[that.nowNodeKey]).append($cvNode);
            $cvNode.html($backHTML);
            $cvNode.css({//Ϊÿ��դ��ڵ����css��ʽ
                'position':'absolute',
                'width':that.width+'px',
                'height':that.height/12+'px',
                'zIndex':20,
                'overflow':'hidden',
                'left':'0',
                'top':that.height/12*i+'px',
            });
            $cvNode.find('*').first().css({
                'display':'block',
                'margin-top':that.height/-12*i+'px'
            });
        }
        switch (showNum) {
            default:
            case 0:
                //��Ӷ�������Ч�� ������צ
                $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                    if (index%2==0) {
                        var leftNums = that.width;
                    } else {
                        var leftNums = that.width*-1;
                    }
                    $(this).animate({
                        'left':leftNums + 'px'
                    },1500);
                });
                break;
            case 1:
            case 2:
                if (showNum==1) {
                    //��Ӷ�������Ч�� ����
                    $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                        var sp = 80*index;
                        $(this).animate({
                            'left':that.width*-1 + 'px'
                        },620+sp);
                    });
                } else {
                    //��Ӷ�������Ч�� ����
                    $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                        var sp = 80*index;
                        $(this).animate({
                            'left':that.width + 'px'
                        },620+sp);
                    });
                }
                break;
        }
        setTimeout(function(){//����������ʼ�ָ�ԭ��״̬
            that.moveFlag = true;
            that.cNodes[tid].style.zIndex = 20;
            that.cNodes[that.nowNodeKey].style.zIndex = that.nowNodeKey;
            $(that.cNodes[that.nowNodeKey]).html($backHTML);//������������Ķ�������
            that.nowNodeKey = tid;//�õ��µĵ�ǰ�ڵ�key
        },1500);
    }

    //�����л�Ч��
    that.cellToggle = function(tid) {
        that.cNodes[tid].style.zIndex = 19;//���¸��ڵ�׼����
        var $backHTML = that.cNodes[that.nowNodeKey].innerHTML;//���ݵ�ǰ�ڵ������
        that.cNodes[that.nowNodeKey].innerHTML = '';//��սڵ㣬����ʹ��
        for (var i = 0;i<20;i++) {//����ѭ�� ������դ��ڵ�
            if (i<5) {//�����ж�
                var rows = 0;
            } else if (i<10) {
                var rows = 1;
            } else if (i<15) {
                var rows = 2;
            } else {
                var rows = 3;
            }
            var $cvNode = $('<div class="cvNode"></div>');
            $(that.cNodes[that.nowNodeKey]).append($cvNode);
            $cvNode.html($backHTML);
            $cvNode.css({//Ϊÿ��դ��ڵ����css��ʽ
                'position':'absolute',
                'width':that.width/5+'px',
                'height':that.height/4+'px',
                'zIndex':20,
                'overflow':'hidden',
                'left':that.width/5*(i%5)+'px',
                'top':that.height/4*rows+'px',
            });
            $cvNode.find('*').first().css({
                'display':'block',
                'margin-left':that.width/-5*(i%5)+'px',
                'margin-top':that.height/-4*rows+'px',
            });
        }
        //��Ӷ�������Ч��
        $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
            if (index%2==0) {
                $(this).find('*').first().animate({
                    "margin-left": $(this).width() + 'px'
                }, 500);
            }
        });
        setTimeout(function(){
            $(that.cNodes[that.nowNodeKey]).find('.cvNode').each(function(index,el){
                if (index%1==0) {
                    $(this).find('*').first().animate({
                        "margin-left": $(this).width() + 'px'
                    }, 500);
                }
            });
        },600);
        setTimeout(function(){//����������ʼ�ָ�ԭ��״̬
            that.moveFlag = true;
            that.cNodes[tid].style.zIndex = 20;
            that.cNodes[that.nowNodeKey].style.zIndex = that.nowNodeKey;
            $(that.cNodes[that.nowNodeKey]).html($backHTML);//������������Ķ�������
            that.nowNodeKey = tid;//�õ��µĵ�ǰ�ڵ�key
        },1100);
    }

    //�Զ����ſ��Ʒ���
    that.moveTime = function() {
        setTimeout(function(){
            if (that.moveFlag) {
                that.speedNum++;
                if (that.speedNum>=that.objs.speed/100) {
                    that.speedNum = 0;
                    that.toggleMove('next');
                }
            }
            if (!that.isPause) {
                setTimeout(arguments.callee,100);
            }
        },100);
    }
    that.init();
}
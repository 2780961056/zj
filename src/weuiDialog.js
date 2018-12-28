/**
 * msg:提示信息
 * time:弹出框延迟关闭时间
 */
function showSucDialog(msg,time){
	$("#toastMsg").html(msg);
    $('#toast').show();
    setTimeout(function () {
        $('#toast').hide();
    }, time);	
}

function showDialog(msg){
	$("#dialogMsg").html(msg);
    $('#dialog').show();
    $('#dialog').show().on('click', '.weui_btn_dialog', function () {
        $('#dialog').off('click').hide();
    });
}
function goLearnPage(){
	weui.Loading.show("");
	
	window.location.href="../wechat/view.do?op=learnPage";
}
function goGetPersonal(){
	weui.Loading.show("");
	window.location.href="../wechat/view.do?op=getPersonal";
}
function goChangePasswordInit(){
	weui.Loading.show("");
	window.location.href="../wechat/view.do?op=changePasswordInit";
}
function goStudyCourseInit(){
	weui.Loading.show("");
	window.location.href="../wechat/view.do?op=studyCourseInit";
}

/*
 * 点击上拉显示菜单（actionSheet）
 * */

function loginHome(){
	weui.Loading.show("");
	window.location.href="../wechat/view.do?op=loginHome";
}

function showMenu(){
	var menuHtml = '<div id="actionSheet_wrap">';
	menuHtml += '<div class="weui_mask_transition" id="mask"></div>';
	menuHtml += '<div class="weui_actionsheet" id="weui_actionsheet">';
	menuHtml += '<div class="weui_actionsheet_menu">';
	menuHtml += '<div class="weui_actionsheet_cell"><a href="javascript:void(0);" onclick="goLearnPage()">学习主页</a></div>';
	menuHtml += '<div class="weui_actionsheet_cell"><a href="javascript:void(0);" onclick="goGetPersonal()">个人信息</a></div>';
	menuHtml += '<div class="weui_actionsheet_cell"><a href="javascript:void(0);" onclick="goChangePasswordInit()">修改密码</a></div>';
	menuHtml += '<div class="weui_actionsheet_cell"><a href="javascript:void(0);" onclick="goStudyCourseInit()">课程学习</a></div>';
	menuHtml += '</div>';
	menuHtml += '<div class="weui_actionsheet_action">';
	menuHtml += '<div class="weui_actionsheet_cell" id="actionsheet_main"><a href="javascript:void(0);" onclick="loginHome()">主页</a></div>';
	menuHtml += '<div class="weui_actionsheet_cell" id="actionsheet_cancel">取消</div>';
	menuHtml += '</div>';
	menuHtml += '</div>';
	menuHtml += '</div>';
	if($("#actionSheet_wrap").length>0){
		//移除原先追加的上拉弹窗元素，避免重复追加
		$("#actionSheet_wrap").remove();
	}
	$("body").append($(menuHtml));
	var mask = $('#mask');
    var weuiActionsheet = $('#weui_actionsheet');
    weuiActionsheet.addClass('weui_actionsheet_toggle');
    mask.show()
        .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
        .addClass('weui_fade_toggle').one('click', function () {
        hideActionSheet(weuiActionsheet, mask);
    });
    $('#actionsheet_cancel').one('click', function () {
        hideActionSheet(weuiActionsheet, mask);
    });
    mask.unbind('transitionend').unbind('webkitTransitionEnd');

    function hideActionSheet(weuiActionsheet, mask) {
        weuiActionsheet.removeClass('weui_actionsheet_toggle');
        mask.removeClass('weui_fade_toggle');
        mask.on('transitionend', function () {
            mask.hide();
        }).on('webkitTransitionEnd', function () {
            mask.hide();
        })
    }
}


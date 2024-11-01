/**
 * Plugin Name: wp auto top
 * Plugin URI: http://wordpress.org/plugins/wp-auto-top/
 * Description: 博客侧边滑动，返回顶部，查看评论的小工具
 * Version: 2.93
 * Author: overtrue
 * Author URI: http://weibo.com/joychaocc
 */
var wpAutoTopSpeed = wpAutoTopSpeed || 1;
if (wpAutoTopSpeed < 1) {
    wpAutoTopSpeed = 1
};
wpAutoTopSpeed = parseInt(wpAutoTopSpeed);
wpAutoTopScroll = parseInt(wpAutoTopScroll);

jQuery(document).ready(function($) {
    _body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
    $("#wp-auto-top-top").mouseover(function() {
        wpAutoTopScroll && WpAutoTopGoUp()
    }).mouseout(function() {
        wpAutoTopScroll && clearTimeout(WpAutoTopTimer)
    }).click(function() {
        _body.animate({
            scrollTop: 0
        }, 400)
    });
    $("#wp-auto-top-bottom").mouseover(function() {
        wpAutoTopScroll && WpAutoTopGoDown()
    }).mouseout(function() {
        wpAutoTopScroll && clearTimeout(WpAutoTopTimer)
    }).click(function() {
        _body.animate({
            scrollTop: $(document).height()
        }, 400)
    });
    $("#wp-auto-top-comment").click(function() {
        if (typeof commentPositionId == 'undefined' || $(commentPositionId).length < 1) commentPositionId = '#comments';
        if (typeof commentPositionId == 'undefined') commentPositionId = '[name="comments"]';
        _body.animate({
            scrollTop: $(commentPositionId).offset().top
        }, 400)
    })
});

function WpAutoTopGoUp() {
    _wd = jQuery(window);
    _wd.scrollTop(_wd.scrollTop() - wpAutoTopSpeed);
    WpAutoTopTimer = setTimeout("WpAutoTopGoUp()", 10)
};

function WpAutoTopGoDown() {
    _wd = jQuery(window);
    _wd.scrollTop(_wd.scrollTop() + wpAutoTopSpeed);
    WpAutoTopTimer = setTimeout("WpAutoTopGoDown()", 10)
};
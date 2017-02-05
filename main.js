/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function() {
    $("#content").load("home.html");
    
    $(".landing").mousemove(function (e) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return;
        }
        var posXPercent = e.pageX / $(".landing").width();
        var posYPercent = e.pageY / $(".landing").height();

        var maxOffset = 100;
        var maxOffsetXPercent = maxOffset / $(".landing").width() * 100;
        var maxOffsetYPercent = maxOffset / $(".landing").height() * 100;
        var offsetX = (0.5 - posXPercent) * 2 * maxOffsetXPercent;
        var offsetY = (0.5 - posYPercent) * 2 * maxOffsetYPercent;

        var defaultXPercent = -50;
        var defaultYPercent = -50;

        var newXPercent = defaultXPercent + offsetX;
        var newYPercent = defaultYPercent + offsetY;

        $(".landingTitle").css("-webkit-transform", "translate(" + newXPercent + "%, " + newYPercent + "%)")
    });
    
    var positionsX = [10, 4, 27, 33, 70, 92, 48, 72, 82, 12, 14, 20, 77, 90, 20, 62];
    var positionsY = [10, 23, 5, 78, 33, 22, 15, 8, 44, 47, 88, 69, 90, 66, 40, 78];
    var indexArr = Array.apply(null, {length: positionsX.length}).map(Function.call, Number);
    indexArr.sort(function() { return Math.random() - 0.5 });
    $(".randomText").each(function (index) {
        $(this).css("left", positionsX[indexArr[index]] + "%");
        $(this).css("top", positionsY[indexArr[index]] + "%");
        $(this).animate({
            opacity: 1
        }, Math.floor(Math.random() * 3000), function() {});
    });

    $(".landing").mouseup(function (e) {
        if ($(".landing").is(':animated')) return;

        $(".landing").animate({
            opacity: 0
        }, 1000, function() {
            $(".landing").hide();
            $(".main").css("opacity", 0);
            $(".main").show(); 
            $(".main").animate({
                opacity: 1
            }, 1000, function () {})
        });
    });

    $("ul.nav li").mouseup(function (e) {
        var menuId = e.target.parentElement.id;
        $("ul.nav li").removeClass("active");
        $("#" + menuId).addClass("active");
        $("#content").load(menuId + ".html");
    });
})
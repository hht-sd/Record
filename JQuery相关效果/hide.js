$(document).ready(function() {
    $('#p1').click(function() {
        $('.headerExtent').show(1000, showTitle);
    })
    $('#p2').click(function() {
        $('.headerExtent').hide(1000, hideTitle);
    })
    $('#p3').click(function() {
        $('.headerExtent').fadeIn(1000, showTitle);
    })
    $('#p4').click(function() {
        $('.headerExtent').fadeOut(1000, hideTitle);
    })
    $('#p5').click(function() {
        $('.headerExtent').slideDown(1000, showTitle);
    })
    $('#p6').click(function() {
        $('.headerExtent').slideUp(1000, hideTitle);
    })
})

function showTitle() {
    $(function() {
        $('#p1').hide();
        $('#p3').hide();
        $('#p5').hide();
        $('#p2').show();
        $('#p4').show();
        $('#p6').show();
    })
}

function hideTitle() {
    $(function() {
        $('#p2').hide();
        $('#p4').hide();
        $('#p6').hide();
        $('#p1').show();
        $('#p3').show();
        $('#p5').show();
    })
}